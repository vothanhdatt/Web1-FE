//CREATE POST
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export function createPostRequest(payload) {
  return {
    type: CREATE_POST_REQUEST,
    payload: payload,
  };
}
//UPDATE POST
export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export function updatePostRequest(payload) {
  return {
    type: UPDATE_POST_REQUEST,
    payload: payload,
  };
}
