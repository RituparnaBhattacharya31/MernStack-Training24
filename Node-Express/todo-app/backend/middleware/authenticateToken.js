const jwt = require("jsonwebtoken");
const dotenv = require("dotenv"); // npm i dotenv
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"]; // to fetch the authorization token from header's "authoriation" property
    if (!token) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
        console.log(user)
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

module.exports = { authenticateToken }