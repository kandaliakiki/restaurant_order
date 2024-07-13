import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: mongoose.Schema.Types.Decimal128, required: true },
  timeToServe: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
