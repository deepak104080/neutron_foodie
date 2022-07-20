import { Constants } from "../../redux/constants";

const initialState = {
    foodCart: [],
};

export const reducerFood = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case Constants.ADD_FOOD_TO_CART: 
            let temp = [...state.foodCart, payload];
            return {...state, foodCart: temp}
        default: 
            return state
    }
}