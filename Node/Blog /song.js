class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // in seconds
  }
}

const songs = [
  new Song("Believer", "Imagine Dragons", 204),
  new Song("Shape of You", "Ed Sheeran", 233),
  new Song("Perfect", "Ed Sheeran", 263)
];

module.exports = songs;
