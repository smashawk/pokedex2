import { PokeDataType } from "@api/requests/getPokeData";
import typeData from "@data/type_data.json";
import { formattedPokeDataType } from "./reducers";

export const normalizePokeData = (
	pokeData: PokeDataType
): formattedPokeDataType => {
	const typeArray: string[] = [];

	pokeData.types.forEach((type) => {
		typeData.some((typeLang) => {
			if (type.type.name === typeLang.en) {
				typeArray.push(typeLang.ja);
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
			{ ja: typeArray[0], en: pokeData.types[0].type.name },
			typeArray.length === 2
				? { ja: typeArray[1], en: pokeData.types[1].type.name }
				: { ja: "", en: "" }
		]
	};
};
