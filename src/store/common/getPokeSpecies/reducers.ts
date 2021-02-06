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

// searchPoke
export const searchPokeGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.searchPokeActionTypes
): PokeSpeciesType => {
	switch (action.type) {
		case types.SEARCH_POKE_STARTED:
			return { ...state };
		case types.SEARCH_POKE_SUCCESS:
			return { ...state, ...action.payload };
		case types.SEARCH_POKE_FAILED:
			return { ...state };
		default:
			return state;
	}
};

// searchType
export const searchTypeGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.searchTypeActionTypes
): PokeSpeciesType => {
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

// searchPartner
export const searchPartnerGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.searchPartnerActionTypes
): PokeSpeciesType => {
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
