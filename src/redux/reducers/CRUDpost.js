import * as actionTypes from "../actions";
import _ from "lodash";
import routes from "../../constant/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  data: null,
};
export default function CRUDPostReducer(state = initialState, action) {
  let newState = {};
  let cookie = new Cookies();
  switch (action.type) {
    //CREATE POST
    case actionTypes.CREATE_POST_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;

      return newState;

    case actionTypes.CREATE_POST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = true;
      newState.isSuccess = true;

      newState.data = action.payload;
      toast("Tạo bài viết thành công. Vui lòng đợi admin duyệt.!");
      window.location.href = routes.createpost;

      return newState;

    case actionTypes.CREATE_POST_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.error;
      console.log(action.error);
      toast(action.error);
      return newState;

    default:
      return state;
  }
}
