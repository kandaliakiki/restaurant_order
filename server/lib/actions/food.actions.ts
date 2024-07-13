import Food from "../models/food.model";
import { connectToDB } from "../mongoose";
import { foodDeals } from "../../../client/constants/index";
import mongoose from "mongoose";

export const createFoodFirstTime = async () => {
  try {
    await connectToDB();
    const foodItems = foodDeals.map((deal) => ({
      name: deal.foodName,
      subtitle: deal.subtitle,
      imageUrl: deal.imageUrl,
      rating: mongoose.Types.Decimal128.fromString(deal.rating.toString()), // Convert rating to Decimal128
      timeToServe: deal.timeToServe,
      description: deal.description,
      price: deal.price,
    }));
    await Food.create(foodItems);
    console.log("Food items created successfully");
  } catch (error: any) {
    console.error(error);
  }
};

export const getAllFood = async () => {
  try {
    await connectToDB();
    const foodItems = await Food.find({});
    return foodItems;
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch food items");
  }
};

export const getFoodByName = async (nameQuery: string) => {
  try {
    await connectToDB();
    const foodItems = await Food.find({
      name: { $regex: nameQuery, $options: "i" },
    });
    return foodItems;
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch food items by name");
  }
};
