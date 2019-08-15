import {combineReducers} from 'redux';
import numberReducer from './reducer/number'
import typeReducer from './reducer/type'
import dataReducer from './reducer/data'
import partnerNo from './reducer/partnerNo'

export default combineReducers({
  number: numberReducer,
  type: typeReducer,
  data: dataReducer,
  partnerNo,
});