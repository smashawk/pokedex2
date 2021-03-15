import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";

export type DescType = {
	term: string;
	description: string | number;
};

export const createDescArray = (
	pokeData: NormalizedPokeDataType,
	pokeSpecies: NormalizedPokeSpeciesType
) => {
	return [
		{
			term: "No",
			description: pokeData.id
		},
		{
			term: "Name",
			description: pokeSpecies.name.ja
		},
		{
			term: "Species",
			description: pokeSpecies.genera.ja
		},
		{
			term: "Type1",
			description: pokeData.types[0].en
		},
		{
			term: "Type2",
			description: pokeData.types.length === 2 ? pokeData.types[1].en : ""
		},
		{
			term: "Text",
			description: pokeSpecies.flavor_text_entries.ja
		}
	];
};
