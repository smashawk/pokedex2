import {
	decidePokeTypeState,
	decidePokeTypeActionTypes,
	DECIDE_POKE_TYPE,
	RESET_POKE_TYPE_LIST
} from "@js/types/SearchType/decidePokeTypeTypes";

const initialState: decidePokeTypeState = {
	pokeType1: "-",
	pokeType2: "-",
	clickMessage: false
};

const typeReducer = (
	state = initialState,
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
				...action.payload,
				pokeType1: "-",
				pokeType2: "-"
			};

		default:
			return state;
	}
};

export default typeReducer;
