import { ProxyState } from "../AppState.js";
import service from "../Services/SongsService.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = '';
  ProxyState.songs.forEach(s => template += s.Template);
  document.getElementById("songs").innerHTML = template; 
 }

/**Draws the Users saved songs to the page */
function _drawPlaylist() { 
  let template = '';
  ProxyState.playlist.forEach(s => template += s.playlistTemplate);
  document.getElementById("playlist").innerHTML = template; 
}

function _drawCurrent(){
  // @ts-ignore
  document.getElementById("current").innerHTML = ProxyState.current.currentTemplate
}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your listeners and get your data
    ProxyState.on("songs", _drawResults);
    ProxyState.on("playlist", _drawPlaylist);
    ProxyState.on("current", _drawCurrent)
    this.getMySongs();
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  getMySongs() {
    try {
      service.getMySongs();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    try {
      service.addSong(id)
    } catch (error) {
      console.error(error)
    }

   }

   playSong(id){
     try {
       service.playSong(id)
     } catch (error) {
       console.error(error)
     }
   }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    try {
      service.removeSong(id)
    } catch (error) {
      console.error(error)
      
    }
   }
}
