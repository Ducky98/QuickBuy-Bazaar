const ratingService = require("../services/rating.service.js");

// Create a new rating
const createRating = async (req, res) => {
    const user = req.user; // Extract user information from the request
    try {
        const review = await ratingService.createRating(req.body, user);
        return res.status(201).send(review); // Send a successful response with the created review
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Get all ratings for a specific product
const getAllRating = async (req, res) => {
    const user = req.user; // Extract user information from the request
    const productId = req.params.productId; // Extract product ID from request parameters
    try {
        const reviews = await ratingService.getAllRating(productId);
        return res.status(200).send(reviews); // Send a successful response with all ratings for the product
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

module.exports = {
    createRating,
    getAllRating
};
