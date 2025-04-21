const bcrypt = require("bcrypt");
const User = require("../models/User"); // Assuming you have a User model
const { generateToken } = require("./tokenService"); // Token generation handled by tokenService

// Register a new user
const registerUser = async (username, password) => {
  // Check if the username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("User already exists!");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create a new user
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  
  return newUser;
};

// Validate user credentials and generate a token
const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid credentials!");
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials!");
  }

  // Generate token
  const token = generateToken(user.id);
  return token;
};

module.exports = {
  registerUser,
  loginUser
};
