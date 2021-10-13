import { combineReducers } from "redux";
import { featurepostReducer, getPostByCategoryReducer } from "./listpost";

// eslint-disable-next-line
export default combineReducers({
  featurepostReducer,
  getPostByCategoryReducer,
});
