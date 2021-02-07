import * as types from "./types";
import * as actions from "./actions";

export type OptionType = {
	label: string;
	value: string;
	no: number;
};

type searchPokeSetSelectedOptionState = {
	option: OptionType;
};

const searchPokeInitialState = {
	option: { value: "", label: "", no: 0 }
};

type searchTypeSetSelectedOptionState = {
	option: OptionType[];
};

const searchTypeInitialState = {
	option: [{ value: "", label: "", no: 0 }]
};

export const searchPokeSetSelectedOptionReducer = (
	state = searchPokeInitialState,
	action: actions.searchPokeActionTypes
): searchPokeSetSelectedOptionState => {
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
): searchTypeSetSelectedOptionState => {
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
