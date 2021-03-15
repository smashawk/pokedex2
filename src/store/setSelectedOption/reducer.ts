import * as types from "./types";
import * as actions from "./actions";

export type OptionType = {
	label: string;
	value: string;
	no: number;
};

const searchNameInitialState = { value: "", label: "", no: 0 };

type SearchTypeSetSelectedOptionType = {
	option: OptionType[];
};

const searchTypeInitialState = {
	option: [{ value: "", label: "", no: 0 }]
};

export const searchNameSetSelectedOptionReducer = (
	state = searchNameInitialState,
	action: actions.SearchNameActionTypes
): OptionType => {
	switch (action.type) {
		case types.SEARCH_NAME_SET:
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
	action: actions.SearchTypeActionTypes
): SearchTypeSetSelectedOptionType => {
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
