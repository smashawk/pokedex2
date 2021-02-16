import typeDataArray from "@data/type_data.json";
import { PokeDataType } from "@api/requests/getPokeData";
import { normalizedPokeDataType } from "./reducers";

/**
 * @param pokeData gotten from PokeAPI
 * @return normalized main Pokemon Data
 */
export const normalizePokeData = (
	pokeData: PokeDataType
): normalizedPokeDataType => {
	const matchedTypeArray = pokeData.types.map((type) =>
		typeDataArray.find((data) => type.type.name === data.en)
	) as typeof typeDataArray;

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
