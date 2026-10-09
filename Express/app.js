const express = require('express');
const app = express();

// Profile route
app.get('/profile', (req, res) => {
    res.send('This is your profile page.');
});

// Trending route
app.get('/trending', (req, res) => {
    res.send('Trending Now on Insta');
});

// Cart route
app.get('/cart', (req, res) => {
    res.send('Your Flipkart Cart is empty.');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
