import { combineReducers } from "redux";
import {
  featurepostReducer,
  getPostByCategoryReducer,
  getCategoriesReducer,
  getFeaturePostReducer,
  getDetailPostReducer,
} from "./listpost";
import { getProfileReducer } from "./profile";
// eslint-disable-next-line
export default combineReducers({
  featurepostReducer,
  getPostByCategoryReducer,
  getCategoriesReducer,
  getFeaturePostReducer,
  getProfileReducer,
  getDetailPostReducer,
});
