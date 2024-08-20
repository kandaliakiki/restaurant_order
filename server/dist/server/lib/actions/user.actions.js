"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavoriteFoods = exports.toggleFavoriteFood = exports.updateUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const mongoose_1 = require("../mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const updateUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, userName, }) {
    (0, mongoose_1.connectToDB)();
    try {
        const updatedUser = yield user_model_1.default.findOneAndUpdate({ id: userId }, {
            username: userName.toLowerCase(),
            $setOnInsert: { favoritefoods: [] }, // Only set favoritefoods if the user is new
        }, { upsert: true, new: true } // Ensure the updated document is returned
        );
        console.log("User updated on the server");
        return updatedUser;
    }
    catch (error) {
        throw new Error(`Failed to create/update user : ${error.message}`);
    }
});
exports.updateUser = updateUser;
const toggleFavoriteFood = (userId, foodId) => __awaiter(void 0, void 0, void 0, function* () {
    (0, mongoose_1.connectToDB)();
    try {
        const foodObjectId = new mongoose_2.default.Types.ObjectId(foodId); // Convert to ObjectId
        // Check if the foodId exists in favoriteFoods
        const user = yield user_model_1.default.findOne({ id: userId });
        if (user === null || user === void 0 ? void 0 : user.favoriteFoods.includes(foodObjectId)) {
            // If it exists, remove it
            yield user_model_1.default.findOneAndUpdate({ id: userId }, { $pull: { favoriteFoods: foodObjectId } }, { new: true });
        }
        else {
            // If it doesn't exist, add it
            yield user_model_1.default.findOneAndUpdate({ id: userId }, { $addToSet: { favoriteFoods: foodObjectId } }, { new: true });
        }
        console.log("User's favorite foods updated on the server");
    }
    catch (error) {
        throw new Error(`Failed to toggle favorite food : ${error.message}`);
    }
});
exports.toggleFavoriteFood = toggleFavoriteFood;
const getFavoriteFoods = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    (0, mongoose_1.connectToDB)();
    try {
        const user = yield user_model_1.default.findOne({ id: userId }, { favoriteFoods: 1 }).exec();
        if (!user) {
            throw new Error("User not found");
        }
        return user.favoriteFoods; // Return the array of favorite foods
    }
    catch (error) {
        throw new Error(`Failed to get favorite foods : ${error.message}`);
    }
});
exports.getFavoriteFoods = getFavoriteFoods;
