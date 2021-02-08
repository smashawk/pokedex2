import {
	searchPartnerGetPokeDataDispatcher,
	searchPokeGetPokeDataDispatcher,
	searchTypeGetPokeDataDispatcher
} from "@store/common/getPokeData/dispatchers";
import {
	searchPartnerGetPokeSpeciesDispatcher,
	searchTypeGetPokeSpeciesDispatcher,
	searchPokeGetPokeSpeciesDispatcher
} from "@store/common/getPokeSpecies/dispatchers";
import {
	searchPokeSetSelectedOptionDispatcher,
	searchTypeSetSelectedOptionDispatcher
} from "@store/common/setSelectedOption/dispatcher";
import { setSwitchStateDispatcher } from "@store/searchType/setSwitchState/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { setInputNameDispatcher } from "@store/searchPartner/setInputName/dispatcher";

export const dispatches = {
	searchPoke: {
		setSelectedOptionDispatcher: searchPokeSetSelectedOptionDispatcher,
		getPokeDataDispatcher: searchPokeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchPokeGetPokeSpeciesDispatcher
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
