const connection = require("../database/mysqlConn");

const getUsers = (req, res) => {
    let fetchUsers = "SELECT * FROM users where status=1";
    connection.query(fetchUsers, (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(response);
    })
};

module.exports = { getUsers }