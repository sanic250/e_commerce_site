import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error retrieving products' });
  }
};

export const createProduct = async (req, res) => {
  const {
    name,
    image,
    rating,
    brand,
    category,
    description,
    price,
    countInStock,
  } = req.body;
  const product = new Product({
    name,
    image,
    brand,
    category,
    description,
    rating,
    price,
    countInStock,
  });
  await product.save();
  res.send(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.send(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, brand, category, description, price, countInStock } =
    req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    {
      name,
      image,
      brand,
      category,
      description,
      price,
      countInStock,
    },
    { new: true }
  );
  res.send(product);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.send(products);
};

export const getProductsByBrand = async (req, res) => {
  const { brand } = req.params;
  const products = await Product.find({ brand });
  res.send(products);
};

export const getProductsByPrice = async (req, res) => {
  const { price } = req.params;
  const products = await Product.find({ price });
  res.send(products);
};
