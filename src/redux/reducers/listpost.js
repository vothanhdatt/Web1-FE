import * as actionTypes from "../actions";
import _ from "lodash";
import routes from "../../constant/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  data: null,
};

export const featurepostReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    //FEATUREPOST
    case actionTypes.FEATUREPOST_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;

      return newState;

    case actionTypes.FEATUREPOST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;

      newState.data = action.payload;

      return newState;

    case actionTypes.FEATUREPOST_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.error;
      toast(action.error);
      return newState;
    default:
      return state;
  }
};


