const express = require('express');
const app = express();

function fetchSongLyrics(songName) {
    // Simulating an API failure
    throw new Error("Unable to connect to the Lyrics API.");
}

try {
    const lyrics = fetchSongLyrics("Kesariya");
    console.log(lyrics);
} catch (error) {
    console.log("Custom Error: Failed to fetch song lyrics.");
    console.log("Reason:", error.message);
}

app.listen(3000,(req,res)=>{
console.log("hello");
}
