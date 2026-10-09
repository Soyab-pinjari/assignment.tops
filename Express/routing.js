const express = require('express');
const app = express();

// 1. Dynamic route for restaurant
app.get('/restaurant/:name', (req, res) => {
    res.send(`You are viewing ${req.params.name}`);
});

// 2. Search route using query string
app.get('/search', (req, res) => {
    res.send(`Results for: ${req.query.q}`);
});

// 3. Movie details route using params and query
app.get('/movie/:id/details', (req, res) => {
    res.json({
        id: req.params.id,
        genre: req.query.genre
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
