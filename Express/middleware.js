const express = require('express');
const app = express();

// 1. Custom middleware: requestTime
const requestTime = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};

// 2. Logger middleware: instaLogger
const instaLogger = (req, res, next) => {
    res.on('finish', () => {
        console.log(
            `${req.method} ${req.url} ${res.statusCode}`
        );
    });
    next();
};

// Mount middleware globally
app.use(requestTime);
app.use(instaLogger);

// Route 1: Display request timestamp
app.get('/time-check', (req, res) => {
    res.send(`Request Time: ${req.requestTime}`);
});

// Route 2: Profile page
app.get('/profile', (req, res) => {
    res.send('This is your profile page.');
});

// Route 3: Trending page
app.get('/trending', (req, res) => {
    res.send('Trending Now on Insta');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
