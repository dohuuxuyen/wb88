import { combineReducers } from "redux";
import productReducer from "./reducer";

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
