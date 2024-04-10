const productService = require("../services/product.service.js");

// Create a new product
const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product); // Send successful response with created product
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(200).send(product); // Send successful response with deleted product
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(200).send(product); // Send successful response with updated product
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Find a product by ID
const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        if (!product) {
            return res.status(404).send({ error: "Product not found" }); // Product not found
        }
        return res.status(200).send(product); // Send successful response with found product
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(200).send(products); // Send successful response with all products
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Create multiple products
const createMultipleProduct = async (req, res) => {
    try {
        await productService.createMultipleProduct(req.body);
        return res.status(201).send({ message: "Products Created Successfully" }); // Send successful response
    } catch (error) {
        return res.status(500).send({ error: error.message }); // Handle internal server error
    }
};

// Export the controller functions
module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct
};
