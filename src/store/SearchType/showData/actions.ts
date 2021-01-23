import {
	ShowDataActionTypes,
	SHOW_POKE_DATA
} from "@store/searchType/showData/types";

export const showData = (pokeId: number): ShowDataActionTypes => ({
	type: SHOW_POKE_DATA,
	payload: {
		pokeId
	}
});
