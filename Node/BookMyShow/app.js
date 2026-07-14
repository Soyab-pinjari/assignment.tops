const express = require("express");
const app = express();

app.use(express.json());

// In-memory products
const products = [
  {
    id: 1,
    title: "iPhone 14",
    price: 65000,
    imageUrl: "https://example.com/iphone14.jpg",
  },
  {
    id: 2,
    title: "Samsung TV",
    price: 30000,
    imageUrl: "https://example.com/tv.jpg",
  },
];

// POST - Add Product
app.post("/add-product", (req, res) => {
  const { title, price, imageUrl } = req.body;

  const newProduct = {
    id: products.length + 1,
    title,
    price,
    imageUrl,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    products,
  });
});

// GET - Single Product
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

// DELETE - Product
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    deletedProduct: deletedProduct[0],
    products,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
