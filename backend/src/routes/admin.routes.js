const express = require("express");
const router = express.Router();

const adminOrderController = require("../controller/adminOrder.controller");
const authenticate = require("../middleware/authenticate");

// Middleware for authentication is applied to all routes below
router.use(authenticate);

// Route for getting all orders
router.get("/", adminOrderController.getAllOrders);

// Routes for updating order status
router.put("/:orderId/confirmed", adminOrderController.updateOrderStatus);
router.put("/:orderId/shipped", adminOrderController.updateOrderStatus);
router.put("/:orderId/delivered", adminOrderController.updateOrderStatus);
router.put("/:orderId/cancelled", adminOrderController.updateOrderStatus);
router.put("/:orderId/delete", adminOrderController.updateOrderStatus);

module.exports = router;
