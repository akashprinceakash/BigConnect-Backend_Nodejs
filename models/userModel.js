const pool = require("../config/db");

const UserModel = {
  create: async (name, email) => {
    const { rows } = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return rows[0];
  },

  getById: async (id) => {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0];
  },

  update: async (id, name, email) => {
    const { rows } = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    return rows[0];
  },

  delete: async (id) => {
    const { rows } = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return rows[0];
  },
};

module.exports = UserModel;
