const express = require("express");
const Room = require("./room");

const app = express();

// Hardcoded room data
const rooms = [
  new Room(
    "Deluxe Room",
    "Mumbai",
    2500,
    ["WiFi", "AC", "TV"]
  ),
  new Room(
    "Luxury Suite",
    "Goa",
    5000,
    ["WiFi", "Pool", "Breakfast"]
  ),
  new Room(
    "Budget Room",
    "Surat",
    1200,
    ["WiFi", "Fan", "Parking"]
  )
];

// API Endpoint
app.get("/rooms", (req, res) => {
  res.json(rooms);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
