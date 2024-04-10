const express = require("express");
const router = express.Router();

const reviewController = require("../controller/review.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Route to create a new review
router.post("/create", authenticate, reviewController.createReview);

// Route to get all reviews for a specific product
router.get("/product/:productId", authenticate, reviewController.getAllReview);

module.exports = router;
