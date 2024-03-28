const express = require("express");
const cors = require("cors");
const app = express();

// Call express.json() middleware with parentheses
app.use(express.json());

// Call cors() middleware with parentheses
app.use(cors());

// Import and use auth route
const authRoutes = require('./routes/auth.route');
app.use("/auth", authRoutes);

// Import and use user route
const userRoutes = require('./routes/user.route');
app.use('/user', userRoutes);

module.exports = app;
