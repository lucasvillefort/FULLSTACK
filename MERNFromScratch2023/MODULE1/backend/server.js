const express = require("express");
const products = require("./data/products");

//dotenv.config();
const port = 5003;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log("server is on");
});
