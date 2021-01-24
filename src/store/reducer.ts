import { combineReducers } from "redux";
import { decidePokeReducer } from "@store/searchPoke/decidePoke/reducer";
import { decidePokeTypeReducer } from "@store/searchType/decidePokeType/reducers";
import { showDataReducer } from "@store/searchType/showData/reducer";
import { getPokeDataReducer } from "@store/common/getPokeData/reducers";
import { getPokeSpeciesReducer } from "@store/common/getPokeSpecies/reducers";

const rootReducer = combineReducers({
	searchPoke: combineReducers({
		decidePoke: decidePokeReducer
	}),
	searchType: combineReducers({
		decidePokeType: decidePokeTypeReducer,
		showData: showDataReducer
	}),
	pokeAPI: combineReducers({
		pokeData: getPokeDataReducer,
		pokeSpecies: getPokeSpeciesReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
