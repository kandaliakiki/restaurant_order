import mongoose, { Document } from "mongoose";
import Food from "./food.model";

export interface UserDocument extends Document {
  id: string;
  username: string;
  favoriteFoods: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  favoriteFoods: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
    default: [],
  },
});

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
