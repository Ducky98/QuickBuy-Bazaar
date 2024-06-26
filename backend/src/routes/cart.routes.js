const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Route for fetching user's cart
router.get("/", authenticate, cartController.findUserCart);

// Route for adding an item to the cart
router.put("/add", authenticate, cartController.addItemToCart);

module.exports = router;
