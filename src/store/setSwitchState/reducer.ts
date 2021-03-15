import * as types from "./types";
import * as actions from "./actions";

export type SetSwitchStateType = {
	switchState: boolean;
};

const initialState = {
	switchState: false
};

export const setSwitchStateReducer = (
	state = initialState,
	action: actions.ActionTypes
): SetSwitchStateType => {
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
