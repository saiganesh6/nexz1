const jwt = require("jsonwebtoken");

// Generate a new JWT token
const generateToken = (userId) => {
  // The payload contains the user's ID
  const payload = { userId };
  
  // Generate and return the JWT token, set to expire in 1 hour
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

// Verify a JWT token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // If the token is valid, return the decoded token (user info)
  } catch (err) {
    return null; // If the token is invalid or expired, return null
  }
};

module.exports = {
  generateToken,
  verifyToken
};
