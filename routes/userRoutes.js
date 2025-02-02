const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const { createUser, getUser, updateUser, deleteUser } = require("../controllers/userController");

// User routes
router.post("/users", createUser);
router.get("/users/:id", verifyToken, getUser);
router.put("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);

module.exports = router;
 