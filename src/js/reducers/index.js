import {combineReducers} from 'redux';
import numberReducer from './reducer/number'
import typeArray from './reducer/type'
import id from './reducer/id'
import partnerNo from './reducer/partnerNo'

export default combineReducers({
  number: numberReducer,
  typeArray,
  id,
  partnerNo,
});