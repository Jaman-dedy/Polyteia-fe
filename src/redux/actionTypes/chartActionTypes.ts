export const FETCH_NUMERIC_REQUEST = 'FETCH_NUMERIC_REQUEST';
export const FETCH_NUMERIC_SUCCESS = 'FETCH_NUMERIC_SUCCESS';
export const FETCH_NUMERIC_FAILURE = 'FETCH_NUMERIC_FAILURE';
export const FETCH_NUMERIC_CLEAR = 'FETCH_NUMERIC_CLEAR';

export const FETCH_RANDOM_REQUEST = 'FETCH_RANDOM_REQUEST';
export const FETCH_RANDOM_SUCCESS = 'FETCH_RANDOM_SUCCESS';
export const FETCH_RANDOM_FAILURE = 'FETCH_RANDOM_FAILURE';

interface FetchRandomRequestAction {
    type: typeof FETCH_RANDOM_REQUEST;
  }
  
  interface FetchRandomSuccessAction {
    type: typeof FETCH_RANDOM_SUCCESS;
    payload: any; 
  }
  
  interface FetchRandomFailureAction {
    type: typeof FETCH_RANDOM_FAILURE;
    payload: string;
  }


interface FetchNumericRequestAction {
    type: typeof FETCH_NUMERIC_REQUEST;
  }
  
  interface FetchNumericSuccessAction {
    type: typeof FETCH_NUMERIC_SUCCESS;
    payload: any; 
  }
  
  interface FetchNumericFailureAction {
    type: typeof FETCH_NUMERIC_FAILURE;
    payload: string;
  }
  
  export type NumericDataAction =
    | FetchNumericRequestAction
    | FetchNumericSuccessAction
    | FetchNumericFailureAction;


  export type RandomDataAction =
    | FetchRandomRequestAction
    | FetchRandomSuccessAction
    | FetchRandomFailureAction;