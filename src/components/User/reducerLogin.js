import { Constants } from "../../redux/constants";

const initialObject = {};

export const reducerLogin = (state = initialObject, action) => {
    const {type, payload} = action;

    switch(type) {
        case Constants.SET_LOGIN_DATA:
            console.log('----------login reducer hit-----------------')
            return {
                ...state, loginDataRedux: payload
            }
        case Constants.SET_LOGOUT:
            console.log('----------login reducer hit-----------------')
            return initialObject;
        default:
            return state
    }
}