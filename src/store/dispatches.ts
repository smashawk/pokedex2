import {
	searchPartnerGetPokeDataDispatcher,
	searchNameGetPokeDataDispatcher,
	searchTypeGetPokeDataDispatcher
} from "@store/getPokeData/dispatchers";
import {
	searchPartnerGetPokeSpeciesDispatcher,
	searchTypeGetPokeSpeciesDispatcher,
	searchNameGetPokeSpeciesDispatcher
} from "@store/getPokeSpecies/dispatchers";
import {
	searchNameSetSelectedOptionDispatcher,
	searchTypeSetSelectedOptionDispatcher
} from "@store/setSelectedOption/dispatcher";
import { setSwitchStateDispatcher } from "@store/setSwitchState/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/getPokeTypeData/dispatcher";
import { setInputNameDispatcher } from "@store/setInputName/dispatcher";

export const dispatches = {
	searchName: {
		setSelectedOptionDispatcher: searchNameSetSelectedOptionDispatcher,
		getPokeDataDispatcher: searchNameGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchNameGetPokeSpeciesDispatcher
	},
	searchType: {
		setSwitchStateDispatcher,
		setSelectedOptionDispatcher: searchTypeSetSelectedOptionDispatcher,
		getPokeDataDispatcher: searchTypeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchTypeGetPokeSpeciesDispatcher,
		getPokeTypeDataDispatcher: searchTypeGetPokeTypeDataDispatcher
	},
	searchPartner: {
		setInputNameDispatcher,
		searchPartnerGetPokeDataDispatcher,
		searchPartnerGetPokeSpeciesDispatcher
	}
};
