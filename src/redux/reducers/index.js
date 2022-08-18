import countReducer from "./count";
import personReducer from "./person";
import { combineReducers } from "redux";
// combineReducers用于汇总多个reducer
const allReducer = combineReducers({
  count: countReducer,
  persons: personReducer,
});
export default allReducer;
