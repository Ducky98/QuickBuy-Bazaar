const express = require("express");
const cors = require("cors");
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Middleware for enabling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Import and use authentication routes
const authRoutes = require('./routes/auth.routes');
app.use("/auth", authRoutes);

// Import and use user-related routes
const userRoutes = require('./routes/user.routes');
app.use('/user', userRoutes);

// Import and use product-related routes
const productRoutes = require('./routes/product.routes');
app.use("/api/products", productRoutes);

// Import and use admin product-related routes
const adminProductRoutes = require('./routes/adminProduct.routes');
app.use("/api/admin/products", adminProductRoutes);

// Import and use cart-related routes
const cartRoutes = require('./routes/cart.routes');
app.use("/api/cart", cartRoutes);

// Import and use cart item-related routes
const cartItemRoutes = require('./routes/cartItem.routes');
app.use("/api/cart_items", cartItemRoutes);

// Import and use order-related routes
const orderRoutes = require('./routes/order.routes');
app.use("/api/orders", orderRoutes);

// Import and use review-related routes
const reviewRoutes = require('./routes/review.routes');
app.use("/api/reviews", reviewRoutes);

// Import and use rating-related routes
const ratingRoutes = require('./routes/rating.routes');
app.use("/api/ratings", ratingRoutes);

// Import and use admin order-related routes
const adminOrderRoutes = require('./routes/admin.routes');
app.use("/api/admin/orders", adminOrderRoutes);

module.exports = app;