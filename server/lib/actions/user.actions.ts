import User, { UserDocument } from "../models/user.model";
import { connectToDB } from "../mongoose";

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
