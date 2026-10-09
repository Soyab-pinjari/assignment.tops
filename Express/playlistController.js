// Controller to get all playlists
const getAllPlaylists = (req, res) => {
    const playlists = [
        {
            name: "Chill Vibes",
            numberOfSongs: 25
        },
        {
            name: "Bollywood Hits",
            numberOfSongs: 40
        },
        {
            name: "Workout Mix",
            numberOfSongs: 30
        }
    ];

    res.json(playlists);
};

module.exports = { getAllPlaylists };
