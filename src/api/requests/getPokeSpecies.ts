import { AxiosResponse } from "axios";
import { getRequest } from "@api/index";

export type PokeSpeciesType = {
	base_happiness: number;
	capture_rate: number;
	color: Record<string, unknown>;
	egg_groups: [];
	evolves_from_species: string | null;
	flavor_text_entries: { flavor_text: string; language: { name: string } }[];
	form_descriptions: [];
	forms_switchable: boolean;
	gender_rate: number;
	genera: { genus: string }[];
	generation: Record<string, unknown>;
	growth_rate: Record<string, unknown>;
	habitat: Record<string, unknown>;
	has_gender_differences: boolean;
	hatch_counter: number;
	id: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	name: string;
	names: { name: string }[];
	order: number;
	pal_park_encounters: [];
	pokedex_numbers: [];
	shape: Record<string, unknown>;
	varieties: [];
};

export const getPokeSpecies = async (
	no: number
): Promise<AxiosResponse<PokeSpeciesType>> => {
	const url = `https://pokeapi.co/api/v2/pokemon-species/${no}`;
	return getRequest<PokeSpeciesType>(url);
};
