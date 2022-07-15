import { Constants } from "../../redux/constants";

export const reducerLogin = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case Constants.SET_LOGIN_DATA:
            return {
                ...state, payload
            }
        default:
            return state
    }
}