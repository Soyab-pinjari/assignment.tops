const express = require('express');
const router = express.Router();

const { getAllPlaylists } = require('../controllers/playlistController');

// GET route for all playlists
router.get('/playlists', getAllPlaylists);

module.exports = router;
