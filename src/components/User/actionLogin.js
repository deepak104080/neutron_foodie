import { Constants } from "../../redux/constants";

export const setLoginData = (loginData) => {
    console.log('----------login action hit-----------------')
    return {
        type: Constants.SET_LOGIN_DATA,
        payload: loginData,
    }
}