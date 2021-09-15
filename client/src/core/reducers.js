import { combineReducers } from "redux";
import { pinReducer } from "./pin/reducer";
import { userReducer } from "./user/reducer";


export default combineReducers({
    user: userReducer,
    pins: pinReducer,
})