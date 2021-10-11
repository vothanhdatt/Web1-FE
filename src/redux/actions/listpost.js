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
