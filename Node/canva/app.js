const express = require("express");
const app = express();

app.use(express.json());

// Poster Templates
const templates = [
  {
    id: 1,
    name: "Business Flyer",
    imageUrl: "https://example.com/business.jpg"
  },
  {
    id: 2,
    name: "Birthday Poster",
    imageUrl: "https://example.com/birthday.jpg"
  },
  {
    id: 3,
    name: "Travel Banner",
    imageUrl: "https://example.com/travel.jpg"
  },
  {
    id: 4,
    name: "Event Invitation",
    imageUrl: "https://example.com/event.jpg"
  },
  {
    id: 5,
    name: "Social Media Post",
    imageUrl: "https://example.com/social.jpg"
  }
];

// GET /templates
app.get("/templates", (req, res) => {
  res.json(templates);
});

// POST /design
app.post("/design", (req, res) => {
  const { text, templateId } = req.body;

  const template = templates.find(t => t.id === Number(templateId));

  if (!template) {
    return res.status(404).json({
      message: "Template not found"
    });
  }

  const design = {
    id: Date.now(),
    text,
    template
  };

  res.status(201).json({
    message: "Design created successfully",
    design
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
