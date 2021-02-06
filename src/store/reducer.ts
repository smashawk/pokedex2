import { combineReducers } from "redux";
import {
	searchPartnerGetPokeDataReducer,
	searchPokeGetPokeDataReducer,
	searchTypeGetPokeDataReducer
} from "@store/common/getPokeData/reducers";
import { setSelectedOptionReducer } from "@store/searchPoke/setSelectedOption/reducer";
import { searchPokeGetPokeSpeciesReducer } from "@store/searchPoke/getPokeSpecies/reducers";
import { decidePokeTypeReducer } from "@store/searchType/decidePokeType/reducers";
import { searchTypeGetPokeTypeDataReducer } from "@store/searchType/getPokeTypeData/reducers";
import { setInputNameReducer } from "@store/searchPartner/setInputName/reducer";
import { searchPartnerGetPokeSpeciesReducer } from "@store/searchPartner/getPokeSpecies/reducer";

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
		inputName: setInputNameReducer,
		pokeData: searchPartnerGetPokeDataReducer,
		pokeSpecies: searchPartnerGetPokeSpeciesReducer
	})
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
