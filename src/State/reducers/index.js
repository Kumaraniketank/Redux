import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  amounts: amountReducer,
});
export default reducers;
