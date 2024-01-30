import type {
    RandomDataAction} from '../actionTypes/chartActionTypes';
import {
    FETCH_RANDOM_REQUEST,
    FETCH_RANDOM_SUCCESS,
    FETCH_RANDOM_FAILURE
  } from '../actionTypes/chartActionTypes';
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const randomDataReducer = (state = initialState, action: RandomDataAction) => {
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
          data: action.payload?.data,
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
  
  export default randomDataReducer;
  