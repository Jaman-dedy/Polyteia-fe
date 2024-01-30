import type { InitialState } from '../../types';
import type {
    NumericDataAction} from '../actionTypes/chartActionTypes';
import {
    FETCH_NUMERIC_REQUEST,
    FETCH_NUMERIC_SUCCESS,
    FETCH_NUMERIC_FAILURE
  } from '../actionTypes/chartActionTypes';
  
  const initialState: InitialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const numericDataReducer = (state = initialState, action: NumericDataAction) => {
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
          data: action.payload?.data,
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
  