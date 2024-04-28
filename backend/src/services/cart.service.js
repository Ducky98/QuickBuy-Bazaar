const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({ user: userId });
        let cartItems = await CartItem.find({ cart: cart._id }).populate("product")

        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem = cartItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;
        return cart;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            throw new Error("Cart not found for this user.");
        }

        const product = await Product.findById(req.productId);
        if (!product) {
            throw new Error("Product not found.");
        }

        let cartItem = await CartItem.findOne({ cart: cart._id, product: product._id, size: req.size, userId });
        if (!cartItem) {
            // If item is not present in cart, create a new cart item
            cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1, // Set initial quantity to 1
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
            });

            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem);
        } else {
            // If item with same product and size already exists in cart, increase its quantity
            cartItem.quantity += 1; // Increase quantity by 1

            // Update price and discounted price based on increased quantity
            cartItem.price = product.price * cartItem.quantity;
            cartItem.discountedPrice = product.discountedPrice * cartItem.quantity;

            await cartItem.save();
        }

        // Recalculate cart total price and discount
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let item of cart.cartItems) {
            totalPrice += item.price || 0; // Add item price if available, otherwise add 0
            totalDiscountedPrice += item.discountedPrice || 0; // Add item discounted price if available, otherwise add 0
            totalItem += item.quantity || 0; // Add item quantity if available, otherwise add 0
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;

        await cart.save();
        return "Item added to cart";
    } catch (error) {
        throw new Error(`Error adding cart item: ${error.message}`);
    }
}




module.exports = { createCart , findUserCart, addCartItem}