import { OptionType } from "@store/setSelectedOption/reducer";
import { translateKanaToHira } from "@utils/translateKanatoHira";
import { translateHiraToRoman } from "@utils/translateHiratoRoman";

/**
 * ポケモン検索のサジェスト用配列を作成する
 * ひらがな、カタカナ、ローマ字で検索できる
 * @return  ポケモン検索サジェスト用配列
 */
export const createSuggestArray = (kanaArray: string[]): OptionType[] => {
	return kanaArray.map((data, index) => {
		const kanaName = translateKanaToHira(data);
		const Roman = translateHiraToRoman(kanaName);
		return {
			value: `${data}${kanaName}${Roman}`,
			label: data,
			no: index + 1
		};
	});
};
