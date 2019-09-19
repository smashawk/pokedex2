import {combineReducers} from 'redux';
import numberReducer from './reducer/number'
import typeReducer from './reducer/type'
import dataReducer from './reducer/data'
import shinyReducer from './reducer/shiny'
import partnerReducer from './reducer/partner'
import loginReducer from './reducer/login'
import nijiReducer from './reducer/nijiData'

export default combineReducers({
  number: numberReducer,
  type: typeReducer,
  data: dataReducer,
  shiny: shinyReducer,
  partner: partnerReducer,
  login: loginReducer,
  nijiData: nijiReducer
});