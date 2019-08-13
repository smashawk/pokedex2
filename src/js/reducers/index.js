import {combineReducers} from 'redux';
import number from './reducer/number'
import errorText from './reducer/errorText'
import typeArray from './reducer/type'
import id from './reducer/id'
import partnerNo from './reducer/partnerNo'

export default combineReducers({
  number,
  errorText,
  typeArray,
  id,
  partnerNo,
});