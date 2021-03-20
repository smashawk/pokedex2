import { PokeDataType } from "@api/requests/getPokeData";
import { typeList } from "@constants/variables";
import { NormalizedPokeDataType } from "./reducers";

/**
 * @param pokeData gotten from PokeAPI
 * @return normalized main Pokemon Data
 */
export const normalizePokeData = (
	pokeData: PokeDataType
): NormalizedPokeDataType => {
	const matchedTypeArray = pokeData.types.map((type) =>
		typeList.find((data) => type.type.name === data.en)
	) as typeof typeList;

	return {
		id: pokeData.id,
		name: pokeData.name,
		stats: pokeData.stats,
		types: [
			{ ja: matchedTypeArray[0].ja, en: matchedTypeArray[0].en },
			matchedTypeArray.length === 2
				? { ja: matchedTypeArray[1].ja, en: matchedTypeArray[1].en }
				: { ja: "", en: "" }
		]
	};
};
