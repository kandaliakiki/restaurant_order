import User, { UserDocument } from "../models/user.model";
import { connectToDB } from "../mongoose";
import mongoose from "mongoose";

interface Props {
  userId: string;
  userName: string;
}

export const updateUser = async ({
  userId,
  userName,
}: Props): Promise<UserDocument> => {
  connectToDB();

  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: userId },
      {
        username: userName.toLowerCase(),
        $setOnInsert: { favoritefoods: [] }, // Only set favoritefoods if the user is new
      },
      { upsert: true, new: true } // Ensure the updated document is returned
    );

    console.log("User updated on the server");
    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to create/update user : ${error.message}`);
  }
};

export const toggleFavoriteFood = async (
  userId: string,
  foodId: string
): Promise<void> => {
  connectToDB();

  try {
    const foodObjectId = new mongoose.Types.ObjectId(foodId); // Convert to ObjectId

    // Check if the foodId exists in favoriteFoods
    const user = await User.findOne({ id: userId });
    if (user?.favoriteFoods.includes(foodObjectId)) {
      // If it exists, remove it
      await User.findOneAndUpdate(
        { id: userId },
        { $pull: { favoriteFoods: foodObjectId } },
        { new: true }
      );
    } else {
      // If it doesn't exist, add it
      await User.findOneAndUpdate(
        { id: userId },
        { $addToSet: { favoriteFoods: foodObjectId } },
        { new: true }
      );
    }

    console.log("User's favorite foods updated on the server");
  } catch (error: any) {
    throw new Error(`Failed to toggle favorite food : ${error.message}`);
  }
};

export const getFavoriteFoods = async (
  userId: string
): Promise<mongoose.Types.ObjectId[]> => {
  connectToDB();

  try {
    const user = await User.findOne(
      { id: userId },
      { favoriteFoods: 1 }
    ).exec();
    if (!user) {
      throw new Error("User not found");
    }
    return user.favoriteFoods; // Return the array of favorite foods
  } catch (error: any) {
    throw new Error(`Failed to get favorite foods : ${error.message}`);
  }
};
