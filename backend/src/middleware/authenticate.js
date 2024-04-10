const jwtProvider = require("../config/jwtVerifier.js");
const userService = require("../services/user.service.js"); // Assuming the correct path to the user service

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from authorization header
        if (!token) {
            return res.status(401).send({ error: "Token not found!" }); // Return 401 Unauthorized if token is missing
        }

        const userId = jwtProvider.getUserIdFromToken(token); // Get user ID from the JWT token
        const user = await userService.findUserById(userId); // Await user retrieval (assuming findUserById is asynchronous)
        
        if (!user) {
            return res.status(404).send({ error: "User not found!" }); // Return 404 if user is not found
        }

        req.user = user; // Attach user object to the request for use in subsequent middleware or routes

    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
    next(); // Call next middleware or route handler
};

module.exports = authenticate;
