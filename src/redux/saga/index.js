import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions";
import listpost from "./listpost";

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
}
export default rootSaga;
