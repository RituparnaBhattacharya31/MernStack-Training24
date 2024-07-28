const express = require("express");
const todoRoutes = require("../database/todoRoutes");
const userRouter = require("../database/userRoutes");
const { validateTodo } = require("../middleware/validateTodo");
const multer = require("multer");
const fileManagementRoute = require("../database/fileManagementRoute");
const { fileUpload } = require("../middleware/fileStorage");
const { authenticateToken } = require("../middleware/authenticateToken");
const { authorizeUserRole } = require("../middleware/authorizeUserRole");
const router = express.Router();

// todos specific routes 
router.get("/todos", todoRoutes.getTodos);
router.post("/todos", validateTodo, todoRoutes.addTodo);
router.put("/todos/:id", todoRoutes.updateTodo);
router.delete("/todos/:id", todoRoutes.deleteTodo)

// user specific routes
const upload = multer();
router.post("/userLogin", upload.none(), userRouter.checkCredentials);
router.get("/users", authenticateToken, authorizeUserRole, userRouter.getUsers);

// file specific routes
router.post("/uploadFile", fileUpload, fileManagementRoute.fileUploadFunction);
router.get("/downloadFiles", fileManagementRoute.fileDownloadFunction);

module.exports = router;
