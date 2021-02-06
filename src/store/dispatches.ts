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
import { setSelectedOptionDispatcher } from "@store/searchPoke/setSelectedOption/dispatcher";
import { decidePokeType1Dispatcher } from "@store/searchType/decidePokeType/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { setInputNameDispatcher } from "@store/searchPartner/setInputName/dispatcher";

export const dispatches = {
	searchPoke: {
		setSelectedOptionDispatcher,
		getPokeDataDispatcher: searchPokeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchPokeGetPokeSpeciesDispatcher
	},
	searchType: {
		getPokeDataDispatcher: searchTypeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchTypeGetPokeSpeciesDispatcher,
		getPokeTypeDataDispatcher: searchTypeGetPokeTypeDataDispatcher,
		decidePokeType1Dispatcher
	},
	searchPartner: {
		setInputNameDispatcher,
		searchPartnerGetPokeDataDispatcher,
		searchPartnerGetPokeSpeciesDispatcher
	}
};
