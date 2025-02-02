// const UserModel = require("../models/userModel");

// // Create User
// const createUser = async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     const newUser = await UserModel.create(name, email);
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: "Error creating user" });
//   }
// };

// // Get User by ID
// const getUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await UserModel.getById(id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching user" });
//   }
// };

// // Update User
// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   try {
//     const updatedUser = await UserModel.update(id, name, email);
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ error: "Error updating user" });
//   }
// };

// // Delete User
// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedUser = await UserModel.delete(id);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: "Error deleting user" });
//   }
// };

// module.exports = {
//   createUser,
//   getUser,
//   updateUser,
//   deleteUser,
// };
const pool = require("../config/db");

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
