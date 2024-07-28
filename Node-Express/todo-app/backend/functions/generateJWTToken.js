const jwt = require("jsonwebtoken")
const dotenv = require("dotenv"); // npm i dotenv
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const generateAccessToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, {expiresIn: "1hr" });
}

module.exports = { generateAccessToken }