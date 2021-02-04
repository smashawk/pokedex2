import { decidePokeDispatcher } from "@store/searchPoke/decidePoke/dispatcher";
import { searchPokeGetPokeDataDispatcher } from "@store/searchPoke/getPokeData/dispatcher";
import { searchPokeGetPokeSpeciesDispatcher } from "@store/searchPoke/getPokeSpecies/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { getPokeDataDispatcher } from "@store/common/getPokeData/dispatcher";
import { getPokeSpeciesDispatcher } from "@store/common/getPokeSpecies/dispatcher";
import {
	decidePokeType1Dispatcher,
	decidePokeType2Dispatcher,
	resetTypeDispatcher
} from "@store/searchType/decidePokeType/dispatcher";
import { showDataDispatcher } from "@store/searchType/showData/dispatcher";

export const dispatches = {
	searchPoke: {
		decidePokeDispatcher,
		getPokeDataDispatcher: searchPokeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchPokeGetPokeSpeciesDispatcher
	},
	searchType: {
		getPokeTypeDataDispatcher: searchTypeGetPokeTypeDataDispatcher,
		decidePokeType1Dispatcher,
		decidePokeType2Dispatcher,
		resetTypeDispatcher,
		showDataDispatcher
	},
	pokeAPI: {
		getPokeDataDispatcher,
		getPokeSpeciesDispatcher
	}
};
