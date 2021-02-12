import { PokeTypeDataType } from "@api/requests/getPokeTypeData";
import pokeData from "@data/pokemon_data.json";
import { formattedPokeTypeDataType } from "./reducers";

/**
 * API取得データを整形する
 * @param {PokeTypeDataType} typeData タイプAPIで取得した配列
 * @return {formattedPokeTypeDataType} 整形済みのタイプ配列
 */
export const normalizePokeData = (
	typeData: PokeTypeDataType
): formattedPokeTypeDataType => {
	const typePokeArray = typeData.pokemon
		// Noが810以上のポケモンはいないので、その場合は配列から削除する
		.filter((data) => {
			const pokeNo = +data.pokemon.url.split("/")[6];
			return pokeNo < 810;
		})
		.map((data) => {
			const pokeNo = +data.pokemon.url.split("/")[6];
			return {
				name: {
					ja: pokeData[pokeNo - 1].name.japanese,
					en: pokeData[pokeNo - 1].name.english
				},
				no: pokeNo
			};
		});

	return {
		type: typeData.name,
		pokemon: typePokeArray
	};
};
