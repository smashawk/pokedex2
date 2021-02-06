import { OptionType } from "./reducer";
import * as types from "./types";

export const setSelectedOption = (option: OptionType) =>
	({
		type: types.SET_SELECTED_OPTION,
		payload: {
			option
		}
	} as const);

export type ActionTypes = ReturnType<typeof setSelectedOption>;
