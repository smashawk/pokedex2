import { setSelectedOptionDispatcher } from "@store/searchPoke/setSelectedOption/dispatcher";
import { searchPokeGetPokeDataDispatcher } from "@store/searchPoke/getPokeData/dispatcher";
import { searchPokeGetPokeSpeciesDispatcher } from "@store/searchPoke/getPokeSpecies/dispatcher";
import { decidePokeType1Dispatcher } from "@store/searchType/decidePokeType/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { searchTypeGetPokeDataDispatcher } from "@store/searchType/getPokeData/dispatcher";
import { searchPartnerGetPokeDataDispatcher } from "@store/searchPartner/getPokeData/dispatcher";
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
		searchPartnerGetPokeDataDispatcher,
		searchPartnerGetPokeSpeciesDispatcher
	}
};
