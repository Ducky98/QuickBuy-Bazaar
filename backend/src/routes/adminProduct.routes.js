const express = require("express");
const router = express.Router();

const productContoller = require("../controller/product.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Route to create a single product
router.post("/", authenticate, productContoller.createProduct);

// Route to create multiple products
router.post("/multiple", authenticate, productContoller.createMultipleProduct);

// Route to delete a product by ID
router.delete("/:id", authenticate, productContoller.deleteProduct);

// Route to update a product by ID
router.put("/:id", authenticate, productContoller.updateProduct);

module.exports = router;
