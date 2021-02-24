import * as types from "./types";

export const setInputName = (inputName: string) =>
	({
		type: types.SET_INPUT_NAME,
		payload: {
			inputName
		}
	} as const);

export type ActionTypes = ReturnType<typeof setInputName>;
