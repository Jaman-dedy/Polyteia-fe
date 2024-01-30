import type { Dispatch } from 'redux';
import {
  FETCH_RANDOM_REQUEST,
  FETCH_RANDOM_SUCCESS,
  FETCH_RANDOM_FAILURE,
} from '../actionTypes/chartActionTypes';

import { fetchApi } from '../../helpers/fetchApi';

interface RandomData {
  data: number;
}

export const fetchRandomDataRequest = () => ({
  type: FETCH_RANDOM_REQUEST,
});

export const fetchRandomDataSuccess = (data: RandomData[]) => ({
  type: FETCH_RANDOM_SUCCESS,
  payload: data,
});

export const fetchRandomDataFailure = (error: string) => ({
  type: FETCH_RANDOM_FAILURE,
  payload: error,
});

export const fetchRandomData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchRandomDataRequest());

    try {
      const data = await fetchApi(`random`, 'GET');
      dispatch(fetchRandomDataSuccess(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchRandomDataFailure(error.message));
      }
      else {
        dispatch(fetchRandomDataFailure('An unknown error occurred'));
      }
    }
  };
};
