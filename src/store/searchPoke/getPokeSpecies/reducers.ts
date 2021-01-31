import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import * as types from "./types";
import * as actions from "./actions";

const initialState: PokeSpeciesType = {
	base_happiness: 0,
	capture_rate: 0,
	color: {},
	egg_groups: [],
	evolves_from_species: "",
	flavor_text_entries: [],
	form_descriptions: [],
	forms_switchable: false,
	gender_rate: 0,
	genera: [{ genus: "" }],
	generation: {},
	growth_rate: {},
	habitat: {},
	has_gender_differences: false,
	hatch_counter: 0,
	id: 0,
	is_baby: false,
	is_legendary: false,
	is_mythical: false,
	name: "",
	names: [{ name: "" }],
	order: 0,
	pal_park_encounters: [],
	pokedex_numbers: [],
	shape: {},
	varieties: []
};

export const searchPokeGetPokeSpeciesReducer = (
	state: PokeSpeciesType = initialState,
	action: actions.ActionTypes
): PokeSpeciesType => {
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
