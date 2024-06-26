const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type: Number,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "users"
    },
    mobile:{
        type: Number,
        required: true,
    }
})

const Address=mongoose.model("addressess",AddressSchema);

module.exports = Address;