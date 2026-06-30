const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Soyeb" },
    { id: 2, name: "Parvej" }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    try {
        const { id, name } = req.body;

        if (!id || !name) {
            throw new Error("Id and Name are required");
        }

        users.push({ id, name });

        res.json({
            message: "User added successfully",
            users
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

app.put("/users/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name } = req.body;

        const user = users.find(u => u.id === id);

        if (!user) {
            throw new Error("User not found");
        }

        user.name = name;

        res.json({
            message: "User updated successfully",
            user
        });
    } catch (error) {
        res.status(404).json({
            error: error.message
        });
    }
});

app.delete("/users/:id", (req, res) => {
    try {
        const id = Number(req.params.id);

        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            throw new Error("User not found");
        }

        users.splice(index, 1);

        res.json({
            message: "User deleted successfully",
            users
        });
    } catch (error) {
        res.status(404).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
