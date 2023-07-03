import {
  GET_ALL_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  POST_DOG,
} from "./actions-types";

const initialState = {
  dogs: [],
  detail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOG_BY_ID:
      return { ...state, detail: action.payload };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case POST_DOG:
      return {
        ...state,
        dogs: action.payload,
        //falta: falta?,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
