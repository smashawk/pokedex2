import {
	ShowDataActionTypes,
	SHOW_POKE_DATA
} from "@store/SearchType/showData/types";

export const showData = (pokeId: number): ShowDataActionTypes => ({
	type: SHOW_POKE_DATA,
	payload: {
		pokeId
	}
});
