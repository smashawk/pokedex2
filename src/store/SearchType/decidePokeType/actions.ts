import {
	decidePokeTypeActionTypes,
	DECIDE_POKE_TYPE
} from "@store/searchType/decidePokeType/types";

export const decidePokeType1 = (value: string): decidePokeTypeActionTypes => {
	return {
		type: DECIDE_POKE_TYPE,
		payload: {
			pokeType1: value
		}
	};
};
