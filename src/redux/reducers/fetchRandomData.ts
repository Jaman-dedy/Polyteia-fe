import {
    FETCH_RANDOM_REQUEST,
    FETCH_RANDOM_SUCCESS,
    FETCH_RANDOM_FAILURE,
  } from '../actionTypes/chartActionTypes';
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const numericDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_RANDOM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_RANDOM_SUCCESS:
        return {
          ...state,
          loading: false,
          numericData: action.payload?.data,
        };
      case FETCH_RANDOM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default numericDataReducer;
  