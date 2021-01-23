import { combineReducers } from "redux";
import numberReducer from "@store/SearchPoke/decidePoke/reducer";
import typeReducer from "@store/SearchType/decidePokeType/reducers";
import dataReducer from "@store/SearchType/showData/reducer";
import shinyReducer from "@store/SearchType/showShinyPoke/reducer";
import { getPokeReducer } from "@store/common/getPokeData/reducers";

const rootReducer = combineReducers({
	number: numberReducer,
	type: typeReducer,
	data: dataReducer,
	shiny: shinyReducer,
	PokeAPI: combineReducers({
		PokeData: getPokeReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
