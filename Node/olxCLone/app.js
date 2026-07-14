const express = require("express");
const app = express();

app.use(express.json());

// In-memory products array
const products = [
  {
    id: 1,
    title: "iPhone 14",
    price: 65000,
    imageUrl: "https://example.com/iphone14.jpg"
  },
  {
    id: 2,
    title: "Samsung TV",
    price: 30000,
    imageUrl: "https://example.com/tv.jpg"
  }
];

// POST /add-product
app.post("/add-product", (req, res) => {
  const { title, price, imageUrl } = req.body;

  const newProduct = {
    id: products.length + 1,
    title,
    price,
    imageUrl
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    products
  });
});

// GET /products/:id
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
