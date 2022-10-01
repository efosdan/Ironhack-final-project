const router = require("express").Router();
const mongoose = require("mongoose");

const Product = require("../models/Product.model");

router.post("/products", (req, res, next) => {
  const { name, description, price } = req.body;

  Product.create({ name, description, price })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/products", (req, res, next) => {
  Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
});

module.exports = router;
