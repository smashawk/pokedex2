import * as types from "./types";
import * as actions from "./actions";

export type formattedPokeDataType = {
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

const initialState: formattedPokeDataType = {
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

export const searchPokeGetPokeDataReducer = (
	state: formattedPokeDataType = initialState,
	action: actions.ActionTypes
): formattedPokeDataType => {
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
