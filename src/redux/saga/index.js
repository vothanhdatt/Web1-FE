import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions";
import listpost from "./listpost";

function* rootSaga() {
  yield takeEvery(actionTypes.FEATUREPOST_REQUEST, listpost.featurepostSaga);
}
export default rootSaga;
