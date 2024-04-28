// Import necessary modules
const userService = require("../services/user.service");
const jwtVerifier = require("../config/jwtVerifier");
const bcrypt = require("bcrypt");
const cartService = require('../services/cart.service');

/**
 * Handles user registration.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} HTTP response with JWT token and message.
 */
const register = async (req, res) => {
    try {
        // Create a new user using data from the request body
        const user = await userService.createUser(req.body);

        // Generate JWT token for the newly registered user
        const jwt = jwtVerifier.generateToken(user._id);

        // Create a cart for the user
        await cartService.createCart(user);

        // Send success response with JWT token and message
        return res.status(200).send({ jwt, message: "Registration successful" });
    } catch (error) {
        // Check if the error message indicates a duplicate email
        if (error.message.includes('User Already Exists with Email')) {
            return res.status(400).send({ error: error.message }); // Bad Request due to duplicate email
        } else {
            // Handle other errors and send appropriate response
            console.error(error); // Log other errors for debugging purposes
            return res.status(500).send({ error: "Registration failed. Please try again later." });
        }
    }
};


/**
 * Handles user login.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} HTTP response with JWT token and message.
 */
const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        // Find user by email
        const user = await userService.findUserByEmail(email);
        
        // If user not found, send 404 response
        if (!user) {
            return res.status(404).send({ message: "User not found with this email" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        // If password is invalid, send 401 response
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid password" });
        }

        // Generate JWT token for the logged-in user
        const jwt = jwtVerifier.generateToken(user.id);

        // Send success response with JWT token and message
        return res.status(200).send({ jwt, message: "Login successful" });
    } catch (error) {
        // Handle errors and send appropriate response
        return res.status(500).send({ error: error.message });
    }
};

// Export the register and login functions
module.exports = { register, login };
