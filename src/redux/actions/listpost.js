//FEATUREPOST
export const FEATUREPOST_REQUEST = "FEATUREPOST_REQUEST";
export const FEATUREPOST_SUCCESS = "FEATUREPOST_SUCCESS";
export const FEATUREPOST_FAILURE = "FEATUREPOST_FAILURE";

export const featurepostRequest = (payload) => {
  return {
    type: FEATUREPOST_REQUEST,
    payload: payload,
  };
};

//get post by category
export const GETPOSTBYCATEGORY_REQUEST = "GETPOSTBYCATEGORY_REQUEST";
export const GETPOSTBYCATEGORY_SUCCESS = "GETPOSTBYCATEGORY_SUCCESS";
export const GETPOSTBYCATEGORY_FAILURE = "GETPOSTBYCATEGORY_FAILURE";

export const getPostByCategoryRequest = (payload) => {
  return {
    type: GETPOSTBYCATEGORY_REQUEST,
    payload: payload,
  };
};
