const validateTodo = (req, res, next) => {
    const { task } = req.body;
    if (!task || task.trim().length === 0 || !containsOnlyString(task)) {
        return res.status(400).json({ error: "Invalid title" })
    }
    next();
}

function containsOnlyString(val){
    let regex = /^[A-Za-z]+$/;
    return regex.test(val);
}

module.exports = { validateTodo }