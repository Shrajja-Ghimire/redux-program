// reducers/index.js

const initialState = {
  data: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    case "DELETE_DATA_REQUEST":
      return {
        ...state,
        data: null,
        error: null,
      };
    case "CREATE_POST_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "CREATE_POST_FAILURE":
      return {
        ...state,
        data: null,
        error: action.payload,
      };

    case "PUT_POST_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "PUT_POST_FAILURE":
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
