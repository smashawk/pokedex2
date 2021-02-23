import { OptionType } from "@store/common/setSelectedOption/reducer";
import { translateKanaToHira } from "@utils/translateKanatoHira";
import { translateHiraToRoman } from "@utils/translateHiratoRoman";
import pokeDataArray from "@constants/pokemon_data.json";

/**
 * ポケモン検索のサジェスト用配列を作成する
 * ひらがな、カタカナ、ローマ字で検索できる
 * @return  ポケモン検索サジェスト用配列
 */
export const createSuggestArray = (): OptionType[] => {
	return pokeDataArray.map((data) => {
		const kanaName = translateKanaToHira(data.name.japanese);
		const Roman = translateHiraToRoman(kanaName);
		return {
			value: `${data.name.japanese}${kanaName}${Roman}`,
			label: data.name.japanese,
			no: data.id
		};
	});
};
