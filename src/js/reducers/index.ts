import {combineReducers} from 'redux';
import numberReducer from './SearchPoke/number'
import typeReducer from './SearchType/type'
import dataReducer from './SearchType/data'
import shinyReducer from './SearchType/shiny'
import partnerReducer from './SearchPartner/partner'
import loginReducer from './SearchPartner/login'

const rootReducer = combineReducers({
  number: numberReducer,
  type: typeReducer,
  data: dataReducer,
  shiny: shinyReducer,
  partner: partnerReducer,
  login: loginReducer,
});

export default rootReducer;


// rootReducerの返り値（ジェネリクス）を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>