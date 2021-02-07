import * as types from "./types";
import * as actions from "./actions";

export type formattedPokeTypeDataType = {
	type: string;
	pokemon: { name: { ja: string; en: string }; no: number }[];
};

type getPokeTypeDataType = {
	type1: formattedPokeTypeDataType;
	type2: formattedPokeTypeDataType;
};

const initialState: getPokeTypeDataType = {
	type1: {
		type: "",
		pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
	},
	type2: {
		type: "",
		pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
	}
};

export const searchTypeGetPokeTypeDataReducer = (
	state = initialState,
	action: actions.TypeActionTypes
): getPokeTypeDataType => {
	switch (action.type) {
		case types.POKE_TYPE1_STARTED:
			return { ...state };
		case types.POKE_TYPE1_SUCCESS:
			return { ...state, type1: { ...action.payload } };
		case types.POKE_TYPE1_FAILED:
			return { ...state };
		case types.POKE_TYPE2_STARTED:
			return { ...state };
		case types.POKE_TYPE2_SUCCESS:
			return { ...state, type2: { ...action.payload } };
		case types.POKE_TYPE2_FAILED:
			return { ...state };
		default:
			return state;
	}
};
