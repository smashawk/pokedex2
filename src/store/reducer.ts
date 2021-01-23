import { combineReducers } from "redux";
import typeReducer from "@store/SearchType/decidePokeType/reducers";
import dataReducer from "@store/SearchType/showData/reducer";
import shinyReducer from "@store/SearchType/showShinyPoke/reducer";
import { decidePokeReducer } from "@store/searchPoke/decidePoke/reducer";
import { getPokeReducer } from "@store/common/getPokeData/reducers";

const rootReducer = combineReducers({
	type: typeReducer,
	data: dataReducer,
	shiny: shinyReducer,
	searchPoke: combineReducers({
		decidePoke: decidePokeReducer
	}),
	pokeAPI: combineReducers({
		pokeData: getPokeReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
