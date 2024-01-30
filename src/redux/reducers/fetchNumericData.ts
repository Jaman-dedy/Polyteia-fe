import {
    FETCH_NUMERIC_REQUEST,
    FETCH_NUMERIC_SUCCESS,
    FETCH_NUMERIC_FAILURE,
  } from '../actionTypes/chartActionTypes';
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const numericDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_NUMERIC_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_NUMERIC_SUCCESS:
        return {
          ...state,
          loading: false,
          numericData: action.payload?.data,
        };
      case FETCH_NUMERIC_FAILURE:
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
  