import Food from "../models/food.model";
import { connectToDB } from "../mongoose";
import { foodDeals } from "../../../client/constants/index";
import mongoose from "mongoose";

interface QueryType {
  [key: string]: any;
}

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

export const getFoodById = async (id: string) => {
  try {
    await connectToDB();
    const objectId = new mongoose.Types.ObjectId(id);
    const foodItem = await Food.findById(objectId);
    if (!foodItem) {
      throw new Error("Food item not found");
    }
    const foodItemWithTransformedProperties = {
      ...foodItem.toObject(),
      _id: foodItem._id.toString(),
      rating: parseFloat(foodItem.rating.toString()), // Convert rating to number
    };
    return foodItemWithTransformedProperties;
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch food item by ID");
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

export const getFilteredFood = async (
  maxPrice: number,
  foodTypes: string,
  searchText: string
) => {
  await connectToDB();
  let query: QueryType = {};

  if (maxPrice) {
    query.price = { $lte: Number(maxPrice) };
  }

  if (foodTypes) {
    const typesArray = foodTypes.split(",");
    query.$or = typesArray.map((type) => ({
      name: { $regex: type, $options: "i" },
    }));
  }

  if (searchText) {
    searchText = searchText.trim();
    if (!query.$or) {
      query.$or = [];
    }
    query.$or.push({ name: { $regex: searchText, $options: "i" } });
  }

  try {
    const foodItems = await Food.find(query);
    return foodItems;
  } catch (error) {
    throw new Error("Failed to fetch filtered food items");
  }
};
