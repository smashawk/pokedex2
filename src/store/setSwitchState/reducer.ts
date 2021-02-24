import * as types from "./types";
import * as actions from "./actions";

export type setSwitchStateType = {
	switchState: boolean;
};

const initialState = {
	switchState: false
};

export const setSwitchStateReducer = (
	state = initialState,
	action: actions.ActionTypes
): setSwitchStateType => {
	switch (action.type) {
		case types.SET_SWITCH_STATE:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
