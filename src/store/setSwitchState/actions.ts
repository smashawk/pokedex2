import * as types from "./types";

export const setSwitchState = (switchState: boolean) =>
	({
		type: types.SET_SWITCH_STATE,
		payload: {
			switchState
		}
	} as const);

export type ActionTypes = ReturnType<typeof setSwitchState>;
