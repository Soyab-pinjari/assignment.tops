const express = require('express);
const app = express();
const fs = require("fs");

const songs = [
    "Kesariya",
    "Apna Bana Le",
    "Tum Hi Ho",
    "Heeriye",
    "Satranga"
];

fs.writeFile("playlist.txt", songs.join("\n"), (err) => {
    if (err) {
        console.log("Error creating playlist:", err);
    } else {
        console.log("Playlist created successfully!");
    }
});

