import { OptionType } from "./reducer";
import * as types from "./types";

export const setSelectedOption = (option: OptionType) =>
	({
		type: types.SEARCH_POKE_DATA,
		payload: {
			option
		}
	} as const);

export type ActionTypes = ReturnType<typeof setSelectedOption>;
