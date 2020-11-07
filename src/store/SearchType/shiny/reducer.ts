import {
	ShowShinyPokeState,
	ShowShinyPokeActionTypes,
	SHOW_SHINY_POKE
} from "@js/types/SearchType/showShinyPokeTypes";

const initialState: ShowShinyPokeState = {
	shinyId: 0
};

const shinyReducer = (
	state = initialState,
	action: ShowShinyPokeActionTypes
): ShowShinyPokeState => {
	switch (action.type) {
		case SHOW_SHINY_POKE:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};

export default shinyReducer;
