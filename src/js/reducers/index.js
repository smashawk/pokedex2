import {combineReducers} from 'redux';
import numberReducer from './reducer/number'
import typeReducer from './reducer/type'
import dataReducer from './reducer/data'
import partnerReducer from './reducer/partner'

export default combineReducers({
  number: numberReducer,
  type: typeReducer,
  data: dataReducer,
  partner: partnerReducer,
});