import { OptionType } from "./reducer";
import * as types from "./types";

// searchName
export const searchNameSetSelectedOption = (option: OptionType) =>
	({
		type: types.SEARCH_NAME_SET,
		payload: option
	} as const);

export type SearchNameActionTypes = ReturnType<
	typeof searchNameSetSelectedOption
>;

// searchType
export const searchTypeSetSelectedOption = (option: OptionType[]) =>
	({
		type: types.SEARCH_TYPE_SET,
		payload: {
			option
		}
	} as const);

export type SearchTypeActionTypes = ReturnType<
	typeof searchTypeSetSelectedOption
>;
