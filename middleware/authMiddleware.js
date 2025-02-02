// middleware/authMiddleware.js
// const admin = require("../config/firebase");

// const verifyToken = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];  // Extract the token from Authorization header
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);  // Verify the token
//     req.user = decodedToken;  // Attach the decoded user data to the request object
//     next();  // Continue to the next middleware/route handler
//   } catch (error) {
//     return res.status(403).json({ error: "Invalid token" });  // If token is invalid
//   }
// };

// module.exports = verifyToken;
const admin = require("firebase-admin");

const verifyToken = async (req, res, next) => {
    try {
        console.log("🔹 Authorization Header:", req.headers.authorization);

        const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token

        if (!token) {
            console.log("❌ No token provided");
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("✅ Decoded Token:", decodedToken);

        req.user = decodedToken; // Attach user data to request
        next();
    } catch (error) {
        console.log("❌ Firebase Auth Error:", error.message);
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};

module.exports = verifyToken;
