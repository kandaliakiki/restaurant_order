import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./lib/mongoose";
import {
  createFoodFirstTime,
  getAllFood,
  getFilteredFood,
  getFoodById,
  getFoodByName,
} from "./lib/actions/food.actions";
import { updateUser } from "./lib/actions/user.actions";

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

app.get("/api/food-detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foodItem = await getFoodById(id);
    res.status(200).json(foodItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food item by ID" });
  }
});

// API endpoint to get filtered food items
app.get("/api/food-filter", async (req, res) => {
  const { maxPrice, foodTypes, searchText } = req.query;
  try {
    const foodItems = await getFilteredFood(
      Number(maxPrice),
      foodTypes as string,
      searchText as string
    );
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch filtered food items" });
  }
});

// API endpoint to update user
app.post("/api/updateuser", async (req, res) => {
  const { id, username } = req.body;
  try {
    // Call updateUser function from user.actions.ts with id and username
    await updateUser({ userId: id, userName: username });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
