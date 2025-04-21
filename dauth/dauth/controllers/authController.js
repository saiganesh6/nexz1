const authService = require("../services/authService");  // Import authService
const { generateToken } = require("../services/tokenService");  // Import tokenService for generating tokens

// Register User
const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await authService.registerUser(username, password);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login User and generate JWT token
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.loginUser(username, password);
    res.json({ token });  // Send the generated token back to the user
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { register, login };
