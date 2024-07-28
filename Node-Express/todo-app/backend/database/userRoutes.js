const connection = require("../database/mysqlConn");
const { generateAccessToken } = require("../functions/generateJWTToken");

const checkCredentials = (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    console.log(username, password)
    const query = "SELECT * FROM users WHERE user_name = ? AND password = ?";
    connection.query(query, [username, password], (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (response.length > 0) {
            const user = { username: response[0].user_name, role: response[0].role };
            const accessToken = generateAccessToken(user);
            console.log(accessToken)
            return res.status(200).send({ accessToken })
        } else {
            return res.status(401).json("Invalid credentials!");
        }
    })
}

const getUsers = (req, res) => {
    let fetchUsers = "SELECT * FROM users where status=1";
    connection.query(fetchUsers, (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(response);
    })
};

module.exports = { getUsers, checkCredentials }