import { OptionType } from "./reducer";
import * as types from "./types";

// searchPoke
export const searchPokeSetSelectedOption = (option: OptionType) =>
	({
		type: types.SEARCH_POKE_SET,
		payload: {
			option
		}
	} as const);

export type searchPokeActionTypes = ReturnType<
	typeof searchPokeSetSelectedOption
>;

// searchType
export const searchTypeSetSelectedOption = (option: OptionType[]) =>
	({
		type: types.SEARCH_TYPE_SET,
		payload: {
			option
		}
	} as const);

export type searchTypeActionTypes = ReturnType<
	typeof searchTypeSetSelectedOption
>;
