import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions";
import listpost from "./listpost";
import profile from "./profile";

function* rootSaga() {
  yield takeEvery(actionTypes.FEATUREPOST_REQUEST, listpost.featurepostSaga);
  yield takeEvery(
    actionTypes.GETPOSTBYCATEGORY_REQUEST,
    listpost.getPostByCategorySaga
  );
  yield takeEvery(
    actionTypes.GETCATEGORIES_REQUEST,
    listpost.getCategoriesSaga
  );
  yield takeEvery(
    actionTypes.GETFEATUREPOST_REQUEST,
    listpost.getFeaturePostSaga
  );
  yield takeEvery(actionTypes.GET_PROFILE_REQUEST, profile.getProfileSaga);
  // FEATURE UPDATE PROFILE
  yield takeEvery(
    actionTypes.UPDATE_PROFILE_REQUEST,
    profile.updateProfileSaga
  );
  yield takeEvery(
    actionTypes.GETDETAILPOST_REQUEST,
    listpost.getDetailPostSaga
  );
}
export default rootSaga;
