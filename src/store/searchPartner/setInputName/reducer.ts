import * as types from "./types";
import * as actions from "./actions";

export type setInputNameState = {
	inputName: string;
};

const initialState = {
	inputName: ""
};

export const setInputNameReducer = (
	state = initialState,
	action: actions.ActionTypes
): setInputNameState => {
	switch (action.type) {
		case types.SET_INPUT_NAME:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
