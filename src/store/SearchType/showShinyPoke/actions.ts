import {
	ShowShinyPokeActionTypes,
	SHOW_SHINY_POKE
} from "@store/SearchType/showShinyPoke/types";

export const showShinyPoke = (shinyId: number): ShowShinyPokeActionTypes => ({
	type: SHOW_SHINY_POKE,
	payload: {
		shinyId
	}
});
