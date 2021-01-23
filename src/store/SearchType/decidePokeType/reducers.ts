import {
	decidePokeTypeState,
	decidePokeTypeActionTypes,
	DECIDE_POKE_TYPE,
	RESET_POKE_TYPE_LIST
} from "@store/searchType/decidePokeType/types";

const initialState: decidePokeTypeState = {
	pokeType1: "-",
	pokeType2: "-"
};

export const decidePokeTypeReducer = (
	state: decidePokeTypeState = initialState,
	action: decidePokeTypeActionTypes
): decidePokeTypeState => {
	switch (action.type) {
		case DECIDE_POKE_TYPE:
			return {
				...state,
				...action.payload
			};

		case RESET_POKE_TYPE_LIST:
			return {
				...state,
				pokeType1: "-",
				pokeType2: "-"
			};

		default:
			return state;
	}
};
