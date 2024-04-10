const express = require("express");
const router = express.Router();

const ratingController = require("../controller/rating.controller.js");
const authenticate = require("../middleware/authenticate.js");

// Route to create a new rating
router.post("/create", authenticate, ratingController.createRating);

// Route to get all ratings for a specific product
router.get("/product/:productId", authenticate, ratingController.getAllRating);

module.exports = router;
