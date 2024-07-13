import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./lib/mongoose";
import {
  createFoodFirstTime,
  getAllFood,
  getFoodByName,
} from "./lib/actions/food.actions";

// Specify the path to your .env.local file
dotenv.config({ path: ".env.local" });

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

connectToDB();

// API endpoint to get all food items
app.get("/api/food", async (req, res) => {
  try {
    const foodItems = await getAllFood();
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food items" });
  }
});

app.get("/api/food/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const foodItems = await getFoodByName(category);
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food items by category" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
