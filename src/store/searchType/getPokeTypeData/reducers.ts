import * as types from "./types";
import * as actions from "./actions";

export type formattedPokeTypeDataType = {
	type: string;
	pokemon: { name: { ja: string; en: string }; no: number }[];
};

const initialState: formattedPokeTypeDataType = {
	type: "",
	pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
};

export const searchTypeGetPokeTypeDataReducer = (
	state: formattedPokeTypeDataType = initialState,
	action: actions.ActionTypes
): formattedPokeTypeDataType => {
	switch (action.type) {
		case types.FETCH_STARTED:
			return { ...state };
		case types.FETCH_SUCCESS:
			return { ...state, ...action.payload };
		case types.FETCH_FAILED:
			return { ...state };
		default:
			return state;
	}
};
