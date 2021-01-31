import {
	DecidePokeActionTypes,
	SEARCH_POKE_DATA
} from "@store/searchPoke/decidePoke/types";

export const decidePoke = (no: number, item: any): DecidePokeActionTypes => {
	return {
		type: SEARCH_POKE_DATA,
		payload: {
			no,
			item
		}
	};
};
