const express = require("express");
const connection = require("../database/mysqlConn");
const router = express.Router();

router.get("/todos", (req, res)=>{
    let fetchTodos = "SELECT * FROM todos";
    connection.query(fetchTodos, (err, response) => {
        if(err) {
            return res.status(500).json({error: err.message})
        }
        res.json(response);
    })
})

module.exports = router;
