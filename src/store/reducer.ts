import { combineReducers } from "redux";
import { decidePokeReducer } from "@store/searchPoke/decidePoke/reducer";
import { decidePokeTypeReducer } from "@store/searchType/decidePokeType/reducers";
import { showDataReducer } from "@store/searchType/showData/reducer";
import { getPokeReducer } from "@store/common/getPokeData/reducers";

const rootReducer = combineReducers({
	searchPoke: combineReducers({
		decidePoke: decidePokeReducer
	}),
	searchType: combineReducers({
		decidePokeType: decidePokeTypeReducer,
		showData: showDataReducer
	}),
	pokeAPI: combineReducers({
		pokeData: getPokeReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
