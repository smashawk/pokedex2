import { OptionType } from "@store/common/setSelectedOption/reducer";
import { translateKanaToHira } from "@utils/translateKanatoHira";
import pokeDataArray from "@data/pokemon_data.json";
import { translateHiraToRoman } from "@utils/translateHiratoRoman";

export const createSuggestArray = (): OptionType[] => {
	const suggestArray = [] as OptionType[];

	pokeDataArray.forEach((data) => {
		const kanaName = translateKanaToHira(data.name.japanese);
		const Roman = translateHiraToRoman(kanaName);
		const obj = {
			value: "",
			label: "",
			no: 0
		};
		obj.value = `${data.name.japanese}${kanaName}${Roman}`;
		obj.label = data.name.japanese;
		obj.no = data.id;
		suggestArray.push(obj);
	});

	return suggestArray;
};
