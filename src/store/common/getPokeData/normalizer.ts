import { PokeDataType } from "@api/requests/getPokeData";
import typeData from "@data/type_data.json";
import { formattedPokeDataType } from "./reducers";

export const normalizePokeData = (
	pokeData: PokeDataType
): formattedPokeDataType => {
	const JaTypeArray: string[] = [];

	// 対応するタイプの日本語配列を作る
	pokeData.types.forEach((type) => {
		typeData.some((typeLang) => {
			if (type.type.name === typeLang.en) {
				JaTypeArray.push(typeLang.ja);
				return true;
			}
			return false;
		});
	});

	return {
		id: pokeData.id,
		name: pokeData.name,
		stats: pokeData.stats,
		types: [
			{ ja: JaTypeArray[0], en: pokeData.types[0].type.name },
			JaTypeArray.length === 2
				? { ja: JaTypeArray[1], en: pokeData.types[1].type.name }
				: { ja: "", en: "" }
		]
	};
};
