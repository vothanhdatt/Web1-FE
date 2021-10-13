import { put } from "redux-saga/effects";
import * as actionType from "../actions/index";
console.log(actionType);

// eslint-disable-next-line
export default {
  //FEATUREPOST
  featurepostSaga: function* (action) {
    let payload = action.payload;
    try {
      let response = yield global.apiService.apiCall(
        "get",
        "featurest-posts",
        payload,
        true
      );

      if (response.data) {
        let responseData = response.data;
        if (responseData.data) {
          yield put({
            type: actionType.FEATUREPOST_SUCCESS,
            payload: responseData.data,
          });
        } else {
          yield put({
            type: actionType.FEATUREPOST_FAILURE,
            error: responseData.message,
          });
        }
      } else {
        yield put({
          type: actionType.FEATUREPOST_FAILURE,
          error: "Something went wrong!",
        });
      }
    } catch (error) {
      yield put({
        type: actionType.FEATUREPOST_FAILURE,
        error: "Something went wrong!",
      });
    }
  },
  //GET POST BY CATEGORY
  getPostByCategorySaga: function* (action) {
    let payload = action.payload;
    try {
      let response = yield global.apiService.apiCall(
        "get",
        "get-post-by-category",
        payload
      );

      if (response.data) {
        let responseData = response.data;
        if (responseData.data) {
          yield put({
            type: actionType.GETPOSTBYCATEGORY_SUCCESS,
            payload: responseData.data,
          });
        } else {
          yield put({
            type: actionType.GETPOSTBYCATEGORY_FAILURE,
            error: responseData.message,
          });
        }
      } else {
        yield put({
          type: actionType.GETPOSTBYCATEGORY_FAILURE,
          error: "Something went wrong!",
        });
      }
    } catch (error) {
      yield put({
        type: actionType.GETPOSTBYCATEGORY_FAILURE,
        error: "Something went wrong!",
      });
    }
  },
};
