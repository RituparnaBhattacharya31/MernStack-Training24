const express = require("express");
const todoRoutes = require("../database/todoRoutes");
const userRouter = require("../database/userRoutes");
const { validateTodo } = require("../middleware/validateTodo");
const router = express.Router();

// todos specific routes 
router.get("/todos", todoRoutes.getTodos);
router.post("/todos", validateTodo ,todoRoutes.addTodo);
router.put("/todos/:id", todoRoutes.updateTodo);
router.delete("/todos/:id", todoRoutes.deleteTodo )

// user specific routes
router.get("/users", userRouter.getUsers);

module.exports = router;
