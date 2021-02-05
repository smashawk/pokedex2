import {
	decidePokeTypeState,
	decidePokeTypeActionTypes,
	DECIDE_POKE_TYPE
} from "@store/searchType/decidePokeType/types";

const initialState: decidePokeTypeState = {
	pokeType1: "-"
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

		default:
			return state;
	}
};
