const reviewService = require("../services/review.service.js");

// Create a new review
const createReview = async (req, res) => {
    const user = req.user; // Extract user information from the request
    try {
        const review = await reviewService.createReview(req.body, user);
        return res.status(201).send(review); // Send a successful response with the created review
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Get all reviews for a specific product
const getAllReview = async (req, res) => {
    const user = req.user; // Extract user information from the request
    const productId = req.params.productId; // Extract product ID from request parameters
    try {
        const reviews = await reviewService.getAllReview(productId);
        return res.status(200).send(reviews); // Send a successful response with all reviews for the product
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

module.exports = {
    createReview,
    getAllReview
};
