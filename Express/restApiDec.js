
const express = require('express');
const app = express();

app.use(express.json());

// Sample tracks array
let tracks = [
    { id: 1, name: "Perfect", artist: "Ed Sheeran" },
    { id: 2, name: "Shape of You", artist: "Ed Sheeran" }
];

// POST route: Add a new track
app.post('/tracks', (req, res) => {
    const { name, artist } = req.body;

    const newTrack = {
        id: Date.now(),
        name: name,
        artist: artist
    };

    tracks.push(newTrack);

    res.status(201).json(newTrack);
});

// DELETE route: Remove a track by ID
app.delete('/tracks/:id', (req, res) => {
    const id = Number(req.params.id);

    const trackIndex = tracks.findIndex(track => track.id === id);

    if (trackIndex === -1) {
        return res.status(404).send('Track not found');
    }

    tracks.splice(trackIndex, 1);

    res.status(204).end();
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
