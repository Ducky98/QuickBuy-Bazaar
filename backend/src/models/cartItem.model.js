const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.ObjectId,
        ref: "cart",
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required: true
    },
    size:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    },
    price:{
        type:Number,
        require: true,
    },
    discountedPrice:{
        type: Number,
        require: true
    }
});

const CartItem=mongoose.model("cartItems",cartItemSchema);

module.exports = CartItem;