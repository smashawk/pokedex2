import { combineReducers } from "redux";
import { setSelectedOptionReducer } from "@store/searchPoke/setSelectedOption/reducer";
import { searchPokeGetPokeDataReducer } from "@store/searchPoke/getPokeData/reducers";
import { searchPokeGetPokeSpeciesReducer } from "@store/searchPoke/getPokeSpecies/reducers";
import { decidePokeTypeReducer } from "@store/searchType/decidePokeType/reducers";
import { searchTypeGetPokeDataReducer } from "@store/searchType/getPokeData/reducers";
import { searchTypeGetPokeTypeDataReducer } from "@store/searchType/getPokeTypeData/reducers";
import { searchPartnerGetPokeDataReducer } from "@store/searchPartner/getPokeData/reducers";
import { searchPartnerGetPokeSpeciesReducer } from "@store/searchPartner/getPokeSpecies/reducers";

const rootReducer = combineReducers({
	searchPoke: combineReducers({
		selectedOption: setSelectedOptionReducer,
		pokeData: searchPokeGetPokeDataReducer,
		pokeSpecies: searchPokeGetPokeSpeciesReducer
	}),
	searchType: combineReducers({
		pokeData: searchTypeGetPokeDataReducer,
		pokeTypeData: searchTypeGetPokeTypeDataReducer,
		decidePokeType: decidePokeTypeReducer
	}),
	searchPartner: combineReducers({
		pokeData: searchPartnerGetPokeDataReducer,
		pokeSpecies: searchPartnerGetPokeSpeciesReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
