import type { Request, Response } from "express";
import pool from "../db/config.db.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const query = await pool.query("select * from products");
    const products = query.rows;

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error: any) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { product_name, product_price, product_categories } = req.body;

    if (!product_name || !product_price || !product_categories) {
      return res
        .status(400)
        .json({ message: "Product name, price, and categories are required" });
    }

    const existingProduct = await pool.query(
      "select product_name from products where product_name = $1",
      [product_name],
    );

    if (existingProduct.rows.length > 0) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const query = await pool.query(
      "insert into products (product_name, product_price) values ($1, $2) returning product_id",
      [product_name, product_price],
    );

    const product_id = query.rows[0].product_id;

    for (const category_id of product_categories) {
      await pool.query("insert into product_categories values($1, $2)", [
        product_id,
        category_id,
      ]);
    }

    const productCreated = { product_id, ...req.body };

    res.status(201).json(productCreated);
  } catch (error: any) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: error.message });
  }
};
  