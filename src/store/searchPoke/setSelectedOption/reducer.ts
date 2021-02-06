import * as types from "./types";
import * as actions from "./actions";

export type OptionType = {
	label: string;
	value: string;
	no: number;
};

type setSelectedOptionState = {
	option: OptionType;
};

const initialState = {
	option: { value: "", label: "", no: 0 }
};

export const setSelectedOptionReducer = (
	state = initialState,
	action: actions.ActionTypes
): setSelectedOptionState => {
	switch (action.type) {
		case types.SET_SELECTED_OPTION:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
