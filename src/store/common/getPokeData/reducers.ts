import * as types from "./types";
import * as actions from "./actions";

export type normalizedPokeDataType = {
	// abilities: [];
	// base_experience: number;
	// forms: [];
	// game_indices: [];
	// height: number;
	// held_items: [];
	id: number;
	// is_default: boolean;
	// location_area_encounters: string;
	// moves: [];
	name: string;
	// order: number;
	// species: Record<string, unknown>;
	// sprites: Record<string, unknown>;
	stats: { base_stat: number }[];
	types: { ja: string; en: string }[];
	// weight: number;
};

const initialState: normalizedPokeDataType = {
	// abilities: [],
	// base_experience: 0,
	// forms: [],
	// game_indices: [],
	// height: 0,
	// held_items: [],
	id: 0,
	// is_default: true,
	// location_area_encounters: "",
	// moves: [],
	name: "",
	// order: 0,
	// species: {},
	// sprites: {},
	stats: [
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 },
		{ base_stat: 0 }
	],
	types: [
		{ ja: "", en: "" },
		{ ja: "", en: "" }
	]
	// weight: 0,
};

/** searchName */
export const searchNameGetPokeDataReducer = (
	state = initialState,
	action: actions.searchNameActionTypes
): normalizedPokeDataType => {
	switch (action.type) {
		case types.SEARCH_NAME_STARTED:
			return { ...state };
		case types.SEARCH_NAME_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_NAME_FAILED:
			return { ...state };
		default:
			return state;
	}
};

/** searchType */
export const searchTypeGetPokeDataReducer = (
	state = initialState,
	action: actions.searchTypeActionTypes
): normalizedPokeDataType => {
	switch (action.type) {
		case types.SEARCH_TYPE_STARTED:
			return { ...state };
		case types.SEARCH_TYPE_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_TYPE_FAILED:
			return { ...state };
		default:
			return state;
	}
};

/** searchPartner */
export const searchPartnerGetPokeDataReducer = (
	state = initialState,
	action: actions.searchPartnerActionTypes
): normalizedPokeDataType => {
	switch (action.type) {
		case types.SEARCH_PARTNER_STARTED:
			return { ...state };
		case types.SEARCH_PARTNER_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_PARTNER_FAILED:
			return { ...state };
		default:
			return state;
	}
};
