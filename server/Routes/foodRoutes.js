import express from "express";
import { protect } from "../Middleware/AuthMiddleware.js";
import FoodController from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.post('/create-food', protect, FoodController.handleCreateFood);


export default foodRouter;