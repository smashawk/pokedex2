import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import { normalizedPokeSpeciesType } from "./reducers";

export const normalizePokeData = (
	pokeSpeciesData: PokeSpeciesType
): normalizedPokeSpeciesType => {
	// テキストが日本語の最初のデータを抽出
	const flavor_text = pokeSpeciesData.flavor_text_entries.find(
		(item) => item.language.name === "ja"
	);

	return {
		id: pokeSpeciesData.id,
		name: pokeSpeciesData.name,
		names: pokeSpeciesData.names,
		genera: pokeSpeciesData.genera,
		flavor_text_entries:
			typeof flavor_text !== "undefined"
				? flavor_text
				: { flavor_text: "", language: { name: "" } }
	};
};
