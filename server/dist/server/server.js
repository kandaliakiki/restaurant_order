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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_2 = require("./lib/mongoose");
const food_actions_1 = require("./lib/actions/food.actions");
const user_actions_1 = require("./lib/actions/user.actions");
// Specify the path to your .env.local file
dotenv_1.default.config({ path: ".env.local" });
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, mongoose_2.connectToDB)();
// API endpoint to get all food items
app.get("/api/food", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodItems = yield (0, food_actions_1.getAllFood)();
        res.status(200).json(foodItems);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch food items" });
    }
}));
app.get("/api/food/:category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    try {
        const foodItems = yield (0, food_actions_1.getFoodByName)(category);
        res.status(200).json(foodItems);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch food items by category" });
    }
}));
app.get("/api/food-detail/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foodItem = yield (0, food_actions_1.getFoodById)(id);
        res.status(200).json(foodItem);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch food item by ID" });
    }
}));
// API endpoint to get filtered food items
app.get("/api/food-filter", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { maxPrice, foodTypes, searchText } = req.query;
    try {
        const foodItems = yield (0, food_actions_1.getFilteredFood)(Number(maxPrice), foodTypes, searchText);
        res.status(200).json(foodItems);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch filtered food items" });
    }
}));
// API endpoint to update user
app.post("/api/updateuser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, username } = req.body;
    try {
        // Call updateUser function from user.actions.ts with id and username
        yield (0, user_actions_1.updateUser)({ userId: id, userName: username });
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update user" });
    }
}));
// API endpoint to toggle favorite food
app.post("/api/toggle-favorite-food", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, foodId } = req.body; // Extract userId and foodId from request body
    try {
        yield (0, user_actions_1.toggleFavoriteFood)(userId, foodId); // Call toggleFavoriteFood function
        res.status(200).json({ message: "Favorite food toggled successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to toggle favorite food" });
    }
}));
// API endpoint to get all favorite foods for a user
app.get("/api/favorite-foods/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const favoriteFoods = yield (0, user_actions_1.getFavoriteFoods)(userId); // Call the new function
        res.status(200).json(favoriteFoods);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch favorite foods" });
    }
}));
// API endpoint to get food items by an array of IDs
app.post("/api/food-by-ids", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ids } = req.body; // Expecting an array of IDs in the request body
    try {
        // Ensure ids is an array and filter out any invalid IDs
        const foodItems = yield (0, food_actions_1.getFoodByIds)(ids.filter((id) => mongoose_1.default.Types.ObjectId.isValid(id)) // Specify 'id' type as 'string'
        );
        res.status(200).json(foodItems);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch food items by IDs" });
    }
}));
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
