import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updatedProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts);

router.put("/:id", updatedProduct);

export default router;
