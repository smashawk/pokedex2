import pokeData from "@data/pokemon_data.json";
import { OptionType } from "@store/searchPoke/decidePoke/types";

const kanaToHira = (str: string): string => {
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
			label: "",
			no: 0
		};
		obj.value = `${data.name.japanese}${kanaName}${data.name.english}`;
		obj.label = data.name.japanese;
		obj.no = data.id;
		suggestArray.push(obj);
	});

	return suggestArray;
};
