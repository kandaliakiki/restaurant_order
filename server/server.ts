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
  getFoodByIds,
} from "./lib/actions/food.actions";
import {
  updateUser,
  toggleFavoriteFood,
  getFavoriteFoods,
} from "./lib/actions/user.actions";

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
    await createFoodFirstTime();
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

// API endpoint to toggle favorite food
app.post("/api/toggle-favorite-food", async (req, res) => {
  const { userId, foodId } = req.body; // Extract userId and foodId from request body
  try {
    await toggleFavoriteFood(userId, foodId); // Call toggleFavoriteFood function
    res.status(200).json({ message: "Favorite food toggled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to toggle favorite food" });
  }
});

// API endpoint to get all favorite foods for a user
app.get("/api/favorite-foods/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const favoriteFoods = await getFavoriteFoods(userId); // Call the new function
    res.status(200).json(favoriteFoods);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch favorite foods" });
  }
});

// API endpoint to get food items by an array of IDs
app.post("/api/food-by-ids", async (req, res) => {
  const { ids } = req.body; // Expecting an array of IDs in the request body
  try {
    // Ensure ids is an array and filter out any invalid IDs
    const foodItems = await getFoodByIds(
      ids.filter((id: string) => mongoose.Types.ObjectId.isValid(id)) // Specify 'id' type as 'string'
    );
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food items by IDs" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
