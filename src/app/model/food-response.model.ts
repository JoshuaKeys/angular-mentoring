import { FoodModel } from "./food.interface";

export interface FoodResponseModel {
  success: boolean;
  foodItems: FoodModel[]
}
