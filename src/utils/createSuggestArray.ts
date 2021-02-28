import { OptionType } from "@store/setSelectedOption/reducer";
import { translateKanaToHira } from "@utils/translateKanatoHira";
import { translateHiraToRoman } from "@utils/translateHiratoRoman";

type pokeTypeArrayType = {
	id: number;
	name: {
		english: string;
		japanese: string;
	};
};

/**
 * ポケモン検索のサジェスト用配列を作成する
 * ひらがな、カタカナ、ローマ字で検索できる
 * @return  ポケモン検索サジェスト用配列
 */
export const createSuggestArray = (
	pokeDataArray: pokeTypeArrayType[]
): OptionType[] => {
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
