const express = require("express");
const router = express.Router();

const adminOrderController = require("../controller/adminOrder.controller");
const authenticate = require("../middleware/authenticate");

// Middleware for authentication is applied to all routes below
router.use(authenticate);

// Route for getting all orders
router.get("/", adminOrderController.getAllOrders);

// Routes for updating order status
router.put("/:orderId/confirmed", adminOrderController.confirmedOrders);
router.put("/:orderId/shipped", adminOrderController.shippOrders);
router.put("/:orderId/delivered", adminOrderController.deliverOrders);
router.put("/:orderId/cancelled", adminOrderController.cancelledOrders);
router.put("/:orderId/delete", adminOrderController.deleteOrders);

module.exports = router;
