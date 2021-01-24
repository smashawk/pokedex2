import { PokeDataType } from "@api/requests/getPokeData";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import typeData from "@data/type_data.json";

export const normalizePokeData = (
	pokeData: PokeDataType,
	text: string
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
		],
		text
	};
};
