import * as types from "./types";
import * as actions from "./actions";

export type OptionType = {
	label?: string;
	value?: string;
	no?: number;
};

const searchPokeInitialState = { value: "", label: "", no: 0 };

type searchTypeSetSelectedOptionType = {
	option: OptionType[];
};

const searchTypeInitialState = {
	option: [{ value: "", label: "", no: 0 }]
};

export const searchPokeSetSelectedOptionReducer = (
	state = searchPokeInitialState,
	action: actions.searchPokeActionTypes
): OptionType => {
	switch (action.type) {
		case types.SEARCH_POKE_SET:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};

export const searchTypeSetSelectedOptionReducer = (
	state = searchTypeInitialState,
	action: actions.searchTypeActionTypes
): searchTypeSetSelectedOptionType => {
	switch (action.type) {
		case types.SEARCH_TYPE_SET:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
