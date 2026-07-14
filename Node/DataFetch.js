const express = require("express");
const app = express();

app.use(express.json());

// Sample Users
const users = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@gmail.com",
    age: 24,
    city: "Delhi"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@gmail.com",
    age: 22,
    city: "Surat"
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@gmail.com",
    age: 26,
    city: "Mumbai"
  },
  {
    id: 4,
    name: "Sneha Singh",
    email: "sneha@gmail.com",
    age: 23,
    city: "Pune"
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun@gmail.com",
    age: 25,
    city: "Ahmedabad"
  }
];

// Sample Posts
const posts = [
  { id: 1, userId: 1, title: "Morning Walk", content: "Started my day with a walk." },
  { id: 2, userId: 2, title: "Learning Node.js", content: "Node.js is fun to learn." },
  { id: 3, userId: 3, title: "React Tips", content: "Hooks make React easier." },
  { id: 4, userId: 4, title: "Travel", content: "Visited Goa this weekend." },
  { id: 5, userId: 5, title: "Coding", content: "Practiced JavaScript today." },
  { id: 6, userId: 1, title: "Workout", content: "Completed a gym session." },
  { id: 7, userId: 2, title: "Coffee Time", content: "Enjoying a hot coffee." },
  { id: 8, userId: 3, title: "Books", content: "Reading Clean Code." },
  { id: 9, userId: 4, title: "Food", content: "Tried a new pizza place." },
  { id: 10, userId: 5, title: "Weekend", content: "Relaxing with family." }
];

// Profile Endpoint
app.get("/profile/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const userPosts = posts.filter(post => post.userId === id);

  res.json({
    user,
    posts: userPosts
  });
});

// Feed Endpoint
app.get("/feed", (req, res) => {
  const feed = posts.map(post => {
    const user = users.find(u => u.id === post.userId);

    return {
      ...post,
      author: user.name
    };
  });

  res.json(feed);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
