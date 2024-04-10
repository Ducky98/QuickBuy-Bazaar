const express = require("express");
const router = express.Router();

const orderController = require("../controller/order.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Route to create a new order
router.post("/", authenticate, orderController.createOrder);

// Route to fetch order history for the authenticated user
router.get("/user", authenticate, orderController.orderHistory);

// Route to find an order by its ID
router.get("/:id", authenticate, orderController.findOrderById);

module.exports = router;
