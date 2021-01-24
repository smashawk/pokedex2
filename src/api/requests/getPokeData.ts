import { AxiosResponse } from "axios";
import { getRequest } from "@api/index";

export type PokeDataType = {
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
	stats: { base_stat: number }[];
	types: { type: { name: string } }[];
	weight: number;
};

export const getPokeData = async (
	no: number
): Promise<AxiosResponse<PokeDataType>> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${no}`;
	return getRequest<PokeDataType>(url);
};
