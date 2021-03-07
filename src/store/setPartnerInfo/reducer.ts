import * as types from "./types";
import * as actions from "./actions";

export type setPartnerInfoState = {
	inputName: string;
	pokeNo: number;
	natureNo: { ja: string; en: string };
	charNo: { ja: string; en: string };
};

const initialState = {
	inputName: "",
	pokeNo: 0,
	natureNo: { ja: "", en: "" },
	charNo: { ja: "", en: "" }
};

export const setPartnerInfoReducer = (
	state = initialState,
	action: actions.ActionTypes
): setPartnerInfoState => {
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
