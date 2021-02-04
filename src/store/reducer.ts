import { combineReducers } from "redux";
import { decidePokeReducer } from "@store/searchPoke/decidePoke/reducer";
import { searchPokeGetPokeDataReducer } from "@store/searchPoke/getPokeData/reducers";
import { searchPokeGetPokeSpeciesReducer } from "@store/searchPoke/getPokeSpecies/reducers";
import { searchTypeGetPokeTypeDataReducer } from "@store/searchType/getPokeTypeData/reducers";
import { decidePokeTypeReducer } from "@store/searchType/decidePokeType/reducers";
import { showDataReducer } from "@store/searchType/showData/reducer";
import { getPokeDataReducer } from "@store/common/getPokeData/reducers";
import { getPokeSpeciesReducer } from "@store/common/getPokeSpecies/reducers";

const rootReducer = combineReducers({
	searchPoke: combineReducers({
		decidePoke: decidePokeReducer,
		pokeData: searchPokeGetPokeDataReducer,
		pokeSpecies: searchPokeGetPokeSpeciesReducer
	}),
	searchType: combineReducers({
		pokeTypeData: searchTypeGetPokeTypeDataReducer,
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
