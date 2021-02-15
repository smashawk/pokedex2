import { combineReducers } from "redux";
import {
	searchNameGetPokeDataReducer,
	searchTypeGetPokeDataReducer,
	searchPartnerGetPokeDataReducer
} from "@store/common/getPokeData/reducers";
import {
	searchNameGetPokeSpeciesReducer,
	searchTypeGetPokeSpeciesReducer,
	searchPartnerGetPokeSpeciesReducer
} from "@store/common/getPokeSpecies/reducers";
import {
	searchNameSetSelectedOptionReducer,
	searchTypeSetSelectedOptionReducer
} from "@store/common/setSelectedOption/reducer";
import { setSwitchStateReducer } from "@store/searchType/setSwitchState/reducer";
import { searchTypeGetPokeTypeDataReducer } from "@store/searchType/getPokeTypeData/reducers";
import { setInputNameReducer } from "@store/searchPartner/setInputName/reducer";

const rootReducer = combineReducers({
	searchName: combineReducers({
		selectedOption: searchNameSetSelectedOptionReducer,
		pokeData: searchNameGetPokeDataReducer,
		pokeSpecies: searchNameGetPokeSpeciesReducer
	}),
	searchType: combineReducers({
		switchState: setSwitchStateReducer,
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
