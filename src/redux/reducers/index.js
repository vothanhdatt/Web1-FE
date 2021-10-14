import { combineReducers } from "redux";
import {
  featurepostReducer,
  getPostByCategoryReducer,
  getCategoriesReducer,
  getFeaturePostReducer,
} from "./listpost";

// eslint-disable-next-line
export default combineReducers({
  featurepostReducer,
  getPostByCategoryReducer,
  getCategoriesReducer,
  getFeaturePostReducer,
});
