export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data.id;
  }

  get Template() {
    return /*html*/ `
    <div class="card py-2">
                        <img class="card-img-top" src="${this.albumArt}" alt="holder.js/100x180/">
                        <div class="card-body">
                            <h4 class="card-title" onclick="app.songsController.playSong('${this.id}')">${this.title}</h4>
                            <p class="card-text">${this.artist}</p>
                            <button class="btn btn-outline-success" onclick="app.songsController.addSong('${this.id}')">+</button>
                        </div>
                    </div>
        `;
  }

  get playlistTemplate() {
    return `
    <div class="card py-2">
                        <img class="card-img-top" src="${this.albumArt}" alt="holder.js/100x180/">
                        <div class="card-body">
                            <h4 class="card-title">${this.title}</h4>
                            <p class="card-text">${this.artist}</p>
                            <button class="btn btn-outline-danger" onclick="app.songsController.removeSong('${this.id}')">-</button>
                        </div>
                    </div>

        `;
  }
  get currentTemplate(){
    return `
    <audio controls>
      <source src="${this.preview}">
    </audio>
    
    `
  }
}
