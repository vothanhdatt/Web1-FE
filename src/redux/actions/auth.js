//CHANGE PASSWORD
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const changePasswordRequest = payload => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    payload: payload,
  };
};
//LOGIN
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = payload => {
  return {
    type: LOGIN_REQUEST,
    payload: payload,
  };
};
//REGISTER
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerRequest = payload => {
  return {
    type: REGISTER_REQUEST,
    payload: payload,
  };
};
//REGISTER
export const FORGOTPASSWORD_REQUEST = "FORGOTPASSWORD_REQUEST";
export const FORGOTPASSWORD_SUCCESS = "FORGOTPASSWORD_SUCCESS";
export const FORGOTPASSWORD_FAILURE = "FORGOTPASSWORD_FAILURE";

export const forgotpasswordRequest = payload => {
  return {
    type: FORGOTPASSWORD_REQUEST,
    payload: payload,
  };
};

