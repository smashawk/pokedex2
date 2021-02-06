import { combineReducers } from "redux";
import {
	searchPokeGetPokeDataReducer,
	searchTypeGetPokeDataReducer,
	searchPartnerGetPokeDataReducer
} from "@store/common/getPokeData/reducers";
import {
	searchPokeGetPokeSpeciesReducer,
	searchTypeGetPokeSpeciesReducer,
	searchPartnerGetPokeSpeciesReducer
} from "@store/common/getPokeSpecies/reducers";
import { setSelectedOptionReducer } from "@store/searchPoke/setSelectedOption/reducer";
import { decidePokeTypeReducer } from "@store/searchType/decidePokeType/reducers";
import { searchTypeGetPokeTypeDataReducer } from "@store/searchType/getPokeTypeData/reducers";
import { setInputNameReducer } from "@store/searchPartner/setInputName/reducer";

const rootReducer = combineReducers({
	searchPoke: combineReducers({
		selectedOption: setSelectedOptionReducer,
		pokeData: searchPokeGetPokeDataReducer,
		pokeSpecies: searchPokeGetPokeSpeciesReducer
	}),
	searchType: combineReducers({
		pokeData: searchTypeGetPokeDataReducer,
		pokeSpecies: searchTypeGetPokeSpeciesReducer,
		pokeTypeData: searchTypeGetPokeTypeDataReducer,
		decidePokeType: decidePokeTypeReducer
	}),
	searchPartner: combineReducers({
		inputName: setInputNameReducer,
		pokeData: searchPartnerGetPokeDataReducer,
		pokeSpecies: searchPartnerGetPokeSpeciesReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
