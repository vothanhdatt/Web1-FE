//GET ALL CATEGORIE
export const GET_ALL_CATEGORIE_REQUEST = "GET_ALL_CATEGORIE_REQUEST";
export const GET_ALL_CATEGORIE_SUCCESS = "GET_ALL_CATEGORIE_SUCCESS";
export const GET_ALL_CATEGORIE_FAILURE = "GET_ALL_CATEGORIE_FAILURE";

export const getAllCategorieRequest = (payload) => {
  return {
    type: GET_ALL_CATEGORIE_REQUEST,
    payload: payload,
  };
};
//GET FeatureMember
export const GET_FEATURE_MEMBER_REQUEST = "GET_FEATURE_MEMBER_REQUEST";
export const GET_FEATURE_MEMBER_SUCCESS = "GET_FEATURE_MEMBER_SUCCESS";
export const GET_FEATURE_MEMBER_FAILURE = "GET_FEATURE_MEMBER_FAILURE";

export const getFeatureMemberRequest = (payload) => {
  return {
    type: GET_FEATURE_MEMBER_REQUEST,
    payload: payload,
  };
};
//GET Related Post
export const GET_RELATED_POST_REQUEST = "GET_RELATED_POST_REQUEST";
export const GET_RELATED_POST_SUCCESS = "GET_RELATED_POST_SUCCESS";
export const GET_RELATED_POST_FAILURE = "GET_RELATED_POST_FAILURE";

export const getRelatedPostRequest = (payload) => {
  return {
    type: GET_RELATED_POST_REQUEST,
    payload: payload,
  };
};
