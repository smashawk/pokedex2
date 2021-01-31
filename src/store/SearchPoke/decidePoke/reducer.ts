import {
	DecidePokeState,
	DecidePokeActionTypes,
	SEARCH_POKE_DATA
} from "@store/searchPoke/decidePoke/types";

const initialState: DecidePokeState = {
	no: 0,
	option: { value: "", label: "" }
};

export const decidePokeReducer = (
	state: DecidePokeState = initialState,
	action: DecidePokeActionTypes
): DecidePokeState => {
	switch (action.type) {
		case SEARCH_POKE_DATA:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
