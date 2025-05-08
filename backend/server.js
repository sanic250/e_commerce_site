import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import authenticate from "./middleware/auth.middleware.js";

import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const options = {
  origin: "http://localhost:5173",
};
app.use(cors(options));
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);


app.get("/api/protected", (req, res) => {
  res.send(`Hello ${req.user}`);
});
app.use(authenticate);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  connectDB();
});
