import {
	searchPartnerGetPokeDataDispatcher,
	searchPokeGetPokeDataDispatcher,
	searchTypeGetPokeDataDispatcher
} from "@store/common/getPokeData/dispatchers";
import { setSelectedOptionDispatcher } from "@store/searchPoke/setSelectedOption/dispatcher";
import { searchPokeGetPokeSpeciesDispatcher } from "@store/searchPoke/getPokeSpecies/dispatcher";
import { decidePokeType1Dispatcher } from "@store/searchType/decidePokeType/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { setInputNameDispatcher } from "@store/searchPartner/setInputName/dispatcher";
import { searchPartnerGetPokeSpeciesDispatcher } from "@store/searchPartner/getPokeSpecies/dispatcher";

export const dispatches = {
	searchPoke: {
		setSelectedOptionDispatcher,
		getPokeDataDispatcher: searchPokeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchPokeGetPokeSpeciesDispatcher
	},
	searchType: {
		getPokeDataDispatcher: searchTypeGetPokeDataDispatcher,
		getPokeTypeDataDispatcher: searchTypeGetPokeTypeDataDispatcher,
		decidePokeType1Dispatcher
	},
	searchPartner: {
		setInputNameDispatcher,
		searchPartnerGetPokeDataDispatcher,
		searchPartnerGetPokeSpeciesDispatcher
	}
};
