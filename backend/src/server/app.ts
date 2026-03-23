import express from "express";
import morgan from "morgan";
import productRoutes from "../routes/product.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/products", productRoutes);

export default app;
