import { decidePokeDispatcher } from "@store/searchPoke/decidePoke/dispatcher";
import { searchPokeGetPokeDataDispatcher } from "@store/searchPoke/getPokeData/dispatcher";
import { searchPokeGetPokeSpeciesDispatcher } from "@store/searchPoke/getPokeSpecies/dispatcher";
import { decidePokeType1Dispatcher } from "@store/searchType/decidePokeType/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/searchType/getPokeTypeData/dispatcher";
import { searchTypeGetPokeDataDispatcher } from "@store/searchType/getPokeData/dispatcher";
import { getPokeDataDispatcher } from "@store/common/getPokeData/dispatcher";
import { getPokeSpeciesDispatcher } from "@store/common/getPokeSpecies/dispatcher";

export const dispatches = {
	searchPoke: {
		decidePokeDispatcher,
		getPokeDataDispatcher: searchPokeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchPokeGetPokeSpeciesDispatcher
	},
	searchType: {
		getPokeDataDispatcher: searchTypeGetPokeDataDispatcher,
		getPokeTypeDataDispatcher: searchTypeGetPokeTypeDataDispatcher,
		decidePokeType1Dispatcher
	},
	pokeAPI: {
		getPokeDataDispatcher,
		getPokeSpeciesDispatcher
	}
};
