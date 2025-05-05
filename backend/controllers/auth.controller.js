import mongoose from "mongoose";
import User from "../models/user.model.js";
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
  res.send("Login route called");
};
export const logout = async (req, res) => {
  res.send("Logout route called");
};
