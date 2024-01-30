import type { Dispatch } from 'redux';
import {
    FETCH_NUMERIC_REQUEST,
    FETCH_NUMERIC_SUCCESS,
    FETCH_NUMERIC_FAILURE,
} from '../actionTypes/chartActionTypes';

import { fetchApi } from '../../helpers/fetchApi';

interface NumericData {
    data: number;
}

export const fetchNumericDataRequest = () => ({
    type: FETCH_NUMERIC_REQUEST,
});

export const fetchNumericDataSuccess = (data: NumericData[]) => ({
    type: FETCH_NUMERIC_SUCCESS,
    payload: data,
});

export const fetchNumericDataFailure = (error: string) => ({
    type: FETCH_NUMERIC_FAILURE,
    payload: error,
});

export const fetchNumericData = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchNumericDataRequest());

        try {
            const data = await fetchApi(`pre-populated`, 'GET');
            dispatch(fetchNumericDataSuccess(data));
        } catch (error: unknown) {
            if (error instanceof Error) {
                dispatch(fetchNumericDataFailure(error.message));
            }
            else {
                dispatch(fetchNumericDataFailure('An unknown error occurred'));
            }
        }
    };
};
