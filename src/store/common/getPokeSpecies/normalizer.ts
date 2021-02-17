import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import { normalizedPokeSpeciesType } from "./reducers";

/**
 * @param pokeSpeciesData gotten from PokeAPI
 * @return normalized pokeSpeciesData
 */
export const normalizePokeData = (
	pokeSpeciesData: PokeSpeciesType
): normalizedPokeSpeciesType => {
	const nameJa = pokeSpeciesData.names.find(
		(item) => item.language.name === "ja"
	);
	const flavor_textJa = pokeSpeciesData.flavor_text_entries.find(
		(item) => item.language.name === "ja"
	);
	const flavor_textEn = pokeSpeciesData.flavor_text_entries.find(
		(item) => item.language.name === "en"
	);
	const generaJa = pokeSpeciesData.genera.find(
		(item) => item.language.name === "ja"
	);
	const generaEn = pokeSpeciesData.genera.find(
		(item) => item.language.name === "en"
	);

	return {
		id: pokeSpeciesData.id,
		name: {
			ja: typeof nameJa !== "undefined" ? nameJa.name : "",
			en: pokeSpeciesData.name
		},
		flavor_text_entries: {
			ja: typeof flavor_textJa !== "undefined" ? flavor_textJa.flavor_text : "",
			en: typeof flavor_textEn !== "undefined" ? flavor_textEn.flavor_text : ""
		},
		genera: {
			ja: typeof generaJa !== "undefined" ? generaJa.genus : "",
			en: typeof generaEn !== "undefined" ? generaEn.genus : ""
		}
	};
};
