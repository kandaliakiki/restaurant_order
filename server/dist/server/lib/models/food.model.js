"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    imageUrl: { type: String, required: true },
    rating: { type: mongoose_1.default.Schema.Types.Decimal128, required: true },
    timeToServe: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});
const Food = mongoose_1.default.model("Food", foodSchema);
exports.default = Food;
