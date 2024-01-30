import { combineReducers } from 'redux';
import fetchNumericData from './fetchNumericData';
import fetchRandomData from './fetchRandomData';


const rootReducer = combineReducers({
  numericData: fetchNumericData,
  randomData: fetchRandomData,
});

export default rootReducer;
