import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import data from './data';

const rootReducer = combineReducers({
  firstReducer: (state = {}) => state,
  form,
  data,
});
export default rootReducer;
