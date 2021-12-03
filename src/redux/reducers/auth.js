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
export default function authReducer(state = initialState, action) {
  let newState = {};
  let cookie = new Cookies();
  switch (action.type) {
    //CHANGE PASSWORD
    case actionTypes.CHANGE_PASSWORD_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;

      return newState;

    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;

      newState.data = action.payload;
      toast("Đổi mật khẩu thành công!");
      // cookie.remove("_token");
      window.location.href = routes.login;

      return newState;

    case actionTypes.CHANGE_PASSWORD_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.error;
      toast(action.error);
      return newState;
    //Login
    case actionTypes.LOGIN_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;

      return newState;

    case actionTypes.LOGIN_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      console.log("ajajjaa" + action.payload);
      newState.data = action.payload;
      cookie.set("_token", action.payload);
      toast("Đăng nhập thành công!");
      window.location.href = routes.homepage;

      return newState;

    case actionTypes.LOGIN_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.error;
      toast(action.error);
      return newState;

    //Register
    case actionTypes.REGISTER_REQUEST:
      newState = _.cloneDeep(state);
      newState.isLoading = true;

      return newState;

    case actionTypes.REGISTER_SUCCESS:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = true;
      console.log("ajajjaa" + action.payload)
      newState.data = action.payload;
      cookie.set("_token", action.payload);
      toast("Đăng ký thành công!");
      //window.location.href = routes.login;

      return newState;

    case actionTypes.REGISTER_FAILURE:
      newState = _.cloneDeep(state);
      newState.isLoading = false;
      newState.isSuccess = false;
      newState.error = action.error;
      toast(action.error);
      return newState;
    default:
      return state;
  }
  
}
