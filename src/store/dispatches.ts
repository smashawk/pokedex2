import { getPokeDispatcher } from "@store/common/getPokeData/dispatcher";
import { decidePokeDispatcher } from "@store/searchPoke/decidePoke/dispatcher";
import {
	decidePokeType1Dispatcher,
	decidePokeType2Dispatcher,
	resetTypeDispatcher
} from "@store/searchType/decidePokeType/dispatcher";
import { showDataDispatcher } from "@store/searchType/showData/dispatcher";

export const dispatches = {
	searchPoke: {
		decidePokeDispatcher
	},
	searchType: {
		decidePokeType1Dispatcher,
		decidePokeType2Dispatcher,
		resetTypeDispatcher,
		showDataDispatcher
	},
	pokeAPI: {
		getPokeDispatcher
	}
};
