import {combineReducers} from 'redux';
import numberReducer from './SearchPoke/number'
import typeReducer from './SearchType/type'
import dataReducer from './SearchType/data'
import shinyReducer from './SearchType/shiny'
import partnerReducer from './SearchPartner/partner'
import loginReducer from './SearchPartner/login'

export default combineReducers({
  number: numberReducer,
  type: typeReducer,
  data: dataReducer,
  shiny: shinyReducer,
  partner: partnerReducer,
  login: loginReducer,
});