const authorizeUserRole = (req, res, next) => {
    if (req.user.role !== "Admin") {
        return res.sendStatus(403);
    }
    next();
}

module.exports = { authorizeUserRole }