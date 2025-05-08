import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dontenv from "dotenv";
import User from "../models/user.model.js";
dontenv.config();

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const Userexists = await User.findOne({ email });
  if (Userexists) {
    return res.status(400).send("User already exists");
  }
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).send("User created");
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send("Invalid email or password");
  }
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res.json({
    token,
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role, // Kluczowe - przekaż rolę z bazy danych
    },
  });
};
export const logout = async (req, res) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("No token provided");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.userId;
    // Remove the token from the request header
    req.header("Authorization", "");
    res.send("Logged out successfully");
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};
