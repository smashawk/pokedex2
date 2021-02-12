import { PokeDataType } from "@api/requests/getPokeData";
import typeData from "@data/type_data.json";
import { formattedPokeDataType } from "./reducers";

/**
 * API取得データを整形する
 * @param {PokeDataType} pokeData PokeAPIで取得したポケモンデータ
 * @return {formattedPokeDataType} 整形後のポケモンデータ
 */
export const normalizePokeData = (
	pokeData: PokeDataType
): formattedPokeDataType => {
	const matchedTypeArray = pokeData.types.map((type) =>
		typeData.find((data) => type.type.name === data.en)
	) as typeof typeData;

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
