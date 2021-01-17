import {
	DecidePokeActionTypes,
	SEARCH_POKE_DATA
} from "@store/SearchPoke/decidePoke/types";

export const decidePoke = (
	no: number,
	errorMessage: boolean
): DecidePokeActionTypes => {
	return {
		type: SEARCH_POKE_DATA,
		payload: {
			no,
			errorMessage
		}
	};
};
