import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/brand/:brand", getProductsByBrand);
router.get("/category/:category", getProductsByCategory);
router.get("/price/:price", getProductsByPrice);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
