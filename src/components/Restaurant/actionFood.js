import { Constants } from "../../redux/constants";

export const addFoodToCart = (foodItem) => {
    return{
        type: Constants.ADD_FOOD_TO_CART,
        payload: foodItem
    }
}