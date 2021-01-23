import { getPokeDispatcher } from "@store/common/getPokeData/dispatcher";
import { decidePokeDispatcher } from "@store/searchPoke/decidePoke/dispatcher";

export const dispatches = {
	searchPoke: {
		decidePokeDispatcher
	},
	pokeAPI: {
		getPokeDispatcher
	}
};
