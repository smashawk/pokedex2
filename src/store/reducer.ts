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
import {
	searchPokeSetSelectedOptionReducer,
	searchTypeSetSelectedOptionReducer
} from "@store/common/setSelectedOption/reducer";
import { searchTypeGetPokeTypeDataReducer } from "@store/searchType/getPokeTypeData/reducers";
import { setInputNameReducer } from "@store/searchPartner/setInputName/reducer";

const rootReducer = combineReducers({
	searchPoke: combineReducers({
		selectedOption: searchPokeSetSelectedOptionReducer,
		pokeData: searchPokeGetPokeDataReducer,
		pokeSpecies: searchPokeGetPokeSpeciesReducer
	}),
	searchType: combineReducers({
		selectedOption: searchTypeSetSelectedOptionReducer,
		pokeData: searchTypeGetPokeDataReducer,
		pokeSpecies: searchTypeGetPokeSpeciesReducer,
		pokeTypeData: searchTypeGetPokeTypeDataReducer
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
