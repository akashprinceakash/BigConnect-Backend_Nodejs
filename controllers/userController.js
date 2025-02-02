const UserModel = require("../models/userModel");

// Create User
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await UserModel.create(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
};

// Get User by ID
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.getById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

// Update User
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await UserModel.update(id, name, email);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Error updating user" });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await UserModel.delete(id);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: "Error deleting user" });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
