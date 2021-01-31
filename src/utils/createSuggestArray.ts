import pokeData from "@data/pokemon_data2.json";
import { OptionType } from "@store/searchPoke/decidePoke/types";

const kanaToHira = (str: string) => {
	return str.replace(/[\u30a1-\u30f6]/g, function (match) {
		const chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
};

export const createSuggestArray = (): OptionType[] => {
	const suggestArray = [] as OptionType[];

	pokeData.forEach((data) => {
		const kanaName = kanaToHira(data.name.japanese);
		const obj = {
			value: "",
			label: ""
		};
		obj.value = `${data.name.japanese}${kanaName}${data.name.english}`;
		obj.label = data.name.japanese;
		suggestArray.push(obj);
	});

	return suggestArray;
};
