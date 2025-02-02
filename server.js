const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const admin = require("./config/firebase");  // Import Firebase Admin
const app = express();
const pool = require('./config/db'); // Import your PostgreSQL connection
app.use(cors());
app.use(express.json());

app.get('/generate-token', async (req, res) => {
    try {
      const uid = "testuser123"; // Example user UID
      const customToken = await admin.auth().createCustomToken(uid);
      res.status(200).json({ token: customToken });
    } catch (error) {
      res.status(500).json({ error: 'Error generating token', details: error });
    }
  });
  

  app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()'); // Get current time from DB
        res.json({ message: "Connected to PostgreSQL", time: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database connection failed" });
    }
});

// Use user routes
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
