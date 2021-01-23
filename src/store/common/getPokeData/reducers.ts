import { PokeDataType } from "@api/requests/getPokeData";
import * as types from "./types";
import * as actions from "./actions";

type inputNameType = {
	inputName: string;
};

export type formattedPokeDataType = PokeDataType & inputNameType;

const initialState: formattedPokeDataType = {
	abilities: [],
	base_experience: 0,
	forms: [],
	game_indices: [],
	height: 0,
	held_items: [],
	id: 0,
	is_default: true,
	location_area_encounters: "",
	moves: [],
	name: "",
	order: 0,
	species: {},
	sprites: {},
	stats: [],
	types: [{ type: { name: "" } }, { type: { name: "" } }],
	weight: 0,
	inputName: ""
};

export const getPokeReducer = (
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
