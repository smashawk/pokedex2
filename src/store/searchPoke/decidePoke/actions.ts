import {
	DecidePokeActionTypes,
	OptionType,
	SEARCH_POKE_DATA
} from "@store/searchPoke/decidePoke/types";

export const decidePoke = (
	no: number,
	option: OptionType
): DecidePokeActionTypes => {
	return {
		type: SEARCH_POKE_DATA,
		payload: {
			no,
			option
		}
	};
};
