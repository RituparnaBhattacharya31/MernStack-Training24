const connection = require("../database/mysqlConn");

const getTodos = (req, res) => {
    let fetchTodos = "SELECT * FROM todos where status=1";
    connection.query(fetchTodos, (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(response);
    })
};

const addTodo = (req, res) => {
    const { task, completed } = req.body;
    let insertTodos = "INSERT INTO todos (task, completed) VALUES(?, ?)";
    connection.query(insertTodos, [task, completed], (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ todo_id: response.insertId, task: task, completed: completed, status: 1 });
    })
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    let updateTodos = "UPDATE todos SET task=?, completed=? where todo_id=?";
    connection.query(updateTodos, [task, completed, id], (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id, task, completed });
    })
};

const deleteTodo = (req, res) => {
    const { id } = req.params;
    let deleteTodos = "DELETE FROM todos where todo_id=?";
    connection.query(deleteTodos, [id], (err, response) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).send();
    })
}

module.exports = { getTodos, addTodo, updateTodo, deleteTodo }