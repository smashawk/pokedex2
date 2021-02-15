import {
	searchPartnerGetPokeDataDispatcher,
	searchNameGetPokeDataDispatcher,
	searchTypeGetPokeDataDispatcher
} from "@store/common/getPokeData/dispatchers";
import {
	searchPartnerGetPokeSpeciesDispatcher,
	searchTypeGetPokeSpeciesDispatcher,
	searchNameGetPokeSpeciesDispatcher
} from "@store/common/getPokeSpecies/dispatchers";
import {
	searchNameSetSelectedOptionDispatcher,
	searchTypeSetSelectedOptionDispatcher
} from "@store/common/setSelectedOption/dispatcher";
import { setSwitchStateDispatcher } from "@store/searchType/setSwitchState/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { setInputNameDispatcher } from "@store/searchPartner/setInputName/dispatcher";

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
