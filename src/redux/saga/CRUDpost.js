import { put } from "redux-saga/effects";
import * as actionType from "../actions/index";
console.log(actionType);

// eslint-disable-next-line
export default {
  //CREATE POST
  createPostSaga: function* (action) {
    let payload = action.payload;
    try {
      let response = yield global.apiService.apiCall(
        "post",
        "create-post",
        payload,
        true
      );
      if (response.data) {
        let responseData = response.data;
        if (responseData.data) {
          yield put({
            type: actionType.CREATE_POST_SUCCESS,
            payload: responseData.data,
          });
        } else {
          yield put({
            type: actionType.CREATE_POST_FAILURE,
            error: responseData.error,
          });
        }
      } else {
        yield put({
          type: actionType.CREATE_POST_FAILURE,
          error: "Something went wrong!",
        });
      }
    } catch (error) {
      yield put({
        type: actionType.CREATE_POST_FAILURE,
        error: "Something went wrong!",
      });
    }
  },
  //UPDATE POST
  updatePostSaga: function* (action) {
    let payload = action.payload;
    try {
      let response = yield global.apiService.apiCall(
        "post",
        "post-update",
        payload,
        true
      );
      if (response.data) {
        let responseData = response.data;
        if (responseData.data) {
          yield put({
            type: actionType.UPDATE_POST_SUCCESS,
            payload: responseData.data,
          });
        } else {
          yield put({
            type: actionType.UPDATE_POST_FAILURE,
            error: responseData.error,
          });
        }
      } else {
        yield put({
          type: actionType.UPDATE_POST_FAILURE,
          error: "Something went wrong!",
        });
      }
    } catch (error) {
      yield put({
        type: actionType.UPDATE_POST_FAILURE,
        error: "Something went wrong!",
      });
    }
  },
  //GET LIST POST BY USER
  getListPostByUserSaga: function* (action) {
    let payload = action.payload;
    try {
      let response = yield global.apiService.apiCall(
        "post",
        "get-all-post",
        payload,
        true
      );
      if (response.data) {
        let responseData = response.data;
        if (responseData.data) {
          yield put({
            type: actionType.GET_LIST_POST_BY_USER_SUCCESS,
            payload: responseData.data,
          });
        } else {
          yield put({
            type: actionType.GET_LIST_POST_BY_USER_FAILURE,
            error: responseData.error,
          });
        }
      } else {
        yield put({
          type: actionType.GET_LIST_POST_BY_USER_FAILURE,
          error: "Something went wrong!",
        });
      }
    } catch (error) {
      yield put({
        type: actionType.GET_LIST_POST_BY_USER_FAILURE,
        error: "Something went wrong!",
      });
    }
  },
};
