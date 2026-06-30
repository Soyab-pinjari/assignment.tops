const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
    res.json({
        message: "API is working!"
    });
});

app.post("/api/test", (req, res) => {
    const { name } = req.body;

    res.json({
        message: `Hello, ${name}!`
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
