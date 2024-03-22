const mongoose = require('mongoose');
const mondbUrl = "mongodb+srv://duckyEcommerce:6lOEJBojPezDlNDg@cluster0.kcm6uig.mongodb.net/?retryWrites=true&w=majority"

const connectDb = () => {
    return mongoose.connect(mondbUrl);
}
module.exports = connectDb;