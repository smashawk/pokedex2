import * as types from "./types";
import * as actions from "./actions";

export type normalizedPokeSpeciesType = {
	// base_happiness: number;
	// capture_rate: number;
	// color: Record<string, unknown>;
	// egg_groups: [];
	// evolves_from_species: string | null;
	flavor_text_entries: { flavor_text: string; language: { name: string } };
	// form_descriptions: [];
	// forms_switchable: boolean;
	// gender_rate: number;
	genera: { genus: string }[];
	// generation: Record<string, unknown>;
	// growth_rate: Record<string, unknown>;
	// habitat: Record<string, unknown>;
	// has_gender_differences: boolean;
	// hatch_counter: number;
	id: number;
	// is_baby: boolean;
	// is_legendary: boolean;
	// is_mythical: boolean;
	name: string;
	names: { name: string }[];
	// order: number;
	// pal_park_encounters: [];
	// pokedex_numbers: [];
	// shape: Record<string, unknown>;
	// varieties: [];
};

const initialState: normalizedPokeSpeciesType = {
	// base_happiness: 0,
	// capture_rate: 0,
	// color: {},
	// egg_groups: [],
	// evolves_from_species: "",
	flavor_text_entries: { flavor_text: "", language: { name: "" } },
	// form_descriptions: [],
	// forms_switchable: false,
	// gender_rate: 0,
	genera: [{ genus: "" }],
	// generation: {},
	// growth_rate: {},
	// habitat: {},
	// has_gender_differences: false,
	// hatch_counter: 0,
	id: 0,
	// is_baby: false,
	// is_legendary: false,
	// is_mythical: false,
	name: "",
	names: [{ name: "" }]
	// order: 0,
	// pal_park_encounters: [],
	// pokedex_numbers: [],
	// shape: {},
	// varieties: []
};

// searchPoke
export const searchPokeGetPokeSpeciesReducer = (
	state = initialState,
	action: actions.searchPokeActionTypes
): normalizedPokeSpeciesType => {
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
): normalizedPokeSpeciesType => {
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
): normalizedPokeSpeciesType => {
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
