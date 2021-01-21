import { AxiosResponse } from "axios";
import { getRequest } from "@api/index";

export type PokeData = {
	abilities: [];
	base_experience: number;
	forms: [];
	game_indices: [];
	height: number;
	held_items: [];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: [];
	name: string;
	order: number;
	species: Record<string, unknown>;
	sprites: Record<string, unknown>;
	stats: [];
	types: [];
	weight: number;
};

export const getPokeData = async (
	no: string
): Promise<AxiosResponse<PokeData>> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${no}`;
	return getRequest<PokeData>(url);
};
