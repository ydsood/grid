import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import data from './data';
import gridData from './gridData';

const rootReducer = combineReducers({
  firstReducer: (state = {}) => state,
  form,
  data,
  gridData
});
export default rootReducer;
