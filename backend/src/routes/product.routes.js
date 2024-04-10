const express = require("express");
const router = express.Router();

const productController = require("../controller/product.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Route to get all products
router.get("/", authenticate, productController.getAllProducts);

// Route to find a product by ID 
router.get("/id/:id", authenticate, productController.findProductById);

module.exports = router;
