const jwt = require("jsonwebtoken");

const JWT_KEY = "jshdf43ysdhfu2i3723r3_rrrrer43"
const generateToken = (userId)=>{
    const token = jwt.sign({userId},JWT_KEY, {expiresIn: "48h"});
    return token;
}

const getUserIdFromToken = (token)=>{
    try {
        const decodedToken = jwt.verify(token, JWT_KEY);

        return decodedToken.userId;
    } catch (error) {
        throw new Error(error.message)

    }
}

module.exports = {generateToken, getUserIdFromToken}