import { AxiosResponse } from "axios";
import { getRequest } from "@api/index";

export type PokeTypeDataType = {
	damage_relations: Record<string, unknown>;
	// game_indices: [];
	generation: Record<string, unknown>;
	id: number;
	move_damage_class: Record<string, unknown>;
	// moves: Record<string, unknown>;
	name: string;
	// names: [];
	pokemon: { pokemon: { name: string; url: string } }[];
};

export const getPokeTypeData = async (
	no: number
): Promise<AxiosResponse<PokeTypeDataType>> => {
	const url = `https://pokeapi.co/api/v2/type/${no}`;
	return getRequest<PokeTypeDataType>(url);
};
