const express = require("express");
const app = express();

app.use(express.json());

const songs = require("./song");

// GET all songs
app.get("/songs", (req, res) => {
  res.json(songs);
});

// POST add new song
app.post("/songs", (req, res) => {
  const { title, artist, duration } = req.body;

  const newSong = {
    title,
    artist,
    duration,
  };

  songs.push(newSong);

  res.status(201).json({
    message: "Song added successfully",
    songs,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
