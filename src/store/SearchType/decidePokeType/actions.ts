import {
	decidePokeTypeActionTypes,
	DECIDE_POKE_TYPE,
	RESET_POKE_TYPE_LIST
} from "@store/SearchType/decidePokeType/types";
import resetSelectOption from "@store/utils/resetSelectOption";

export const decidePokeType1 = (value: string): decidePokeTypeActionTypes => {
	return {
		type: DECIDE_POKE_TYPE,
		payload: {
			pokeType1: value,
			clickMessage: true
		}
	};
};

export const decidePokeType2 = (value: string): decidePokeTypeActionTypes => {
	return {
		type: DECIDE_POKE_TYPE,
		payload: {
			pokeType2: value,
			clickMessage: true
		}
	};
};

export const resetType = (): decidePokeTypeActionTypes => {
	resetSelectOption();

	return {
		type: RESET_POKE_TYPE_LIST,
		payload: {
			clickMessage: false
		}
	};
};
