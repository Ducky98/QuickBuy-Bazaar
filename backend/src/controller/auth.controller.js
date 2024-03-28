const userService = require("../services/user.service")
const jwtVerifier = require("../config/jwtVerifier")
const bcrypt = require("bcrypt");
const cartService = require('../services/cart.service')
const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtVerifier.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(200).send({ jwt, message: "register success" })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}


const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(404).send({ message: "user not found with this email!" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid Password...." });
        }
        const jwt = jwtVerifier.generateToken(user.id);

        return res.status(200).send({ jwt, message: "login success" });

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}

module.exports = {register,login}