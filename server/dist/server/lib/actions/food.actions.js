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
exports.getFoodByIds = exports.getFilteredFood = exports.getFoodByName = exports.getFoodById = exports.getAllFood = exports.createFoodFirstTime = void 0;
const food_model_1 = __importDefault(require("../models/food.model"));
const mongoose_1 = require("../mongoose");
const index_1 = require("../../../client/constants/index");
const mongoose_2 = __importDefault(require("mongoose"));
const createFoodFirstTime = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connectToDB)();
        const foodItems = index_1.foodDeals.map((deal) => ({
            name: deal.foodName,
            subtitle: deal.subtitle,
            imageUrl: deal.imageUrl,
            rating: mongoose_2.default.Types.Decimal128.fromString(deal.rating.toString()), // Convert rating to Decimal128
            timeToServe: deal.timeToServe,
            description: deal.description,
            price: deal.price,
        }));
        yield food_model_1.default.create(foodItems);
        console.log("Food items created successfully");
    }
    catch (error) {
        console.error(error);
    }
});
exports.createFoodFirstTime = createFoodFirstTime;
const getAllFood = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connectToDB)();
        const foodItems = yield food_model_1.default.find({});
        return foodItems;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to fetch food items");
    }
});
exports.getAllFood = getAllFood;
const getFoodById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connectToDB)();
        const objectId = new mongoose_2.default.Types.ObjectId(id);
        const foodItem = yield food_model_1.default.findById(objectId);
        if (!foodItem) {
            throw new Error("Food item not found");
        }
        const foodItemWithTransformedProperties = Object.assign(Object.assign({}, foodItem.toObject()), { _id: foodItem._id.toString(), rating: parseFloat(foodItem.rating.toString()) });
        return foodItemWithTransformedProperties;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to fetch food item by ID");
    }
});
exports.getFoodById = getFoodById;
const getFoodByName = (nameQuery) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connectToDB)();
        const foodItems = yield food_model_1.default.find({
            name: { $regex: nameQuery, $options: "i" },
        });
        return foodItems;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to fetch food items by name");
    }
});
exports.getFoodByName = getFoodByName;
const getFilteredFood = (maxPrice, foodTypes, searchText) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connectToDB)();
    let query = {};
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
        const foodItems = yield food_model_1.default.find(query);
        return foodItems;
    }
    catch (error) {
        throw new Error("Failed to fetch filtered food items");
    }
});
exports.getFilteredFood = getFilteredFood;
const getFoodByIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connectToDB)();
    return yield food_model_1.default.find({ _id: { $in: ids } });
});
exports.getFoodByIds = getFoodByIds;
