import {
	ShowDataState,
	ShowDataActionTypes,
	SHOW_POKE_DATA
} from "@store/SearchType/showData/types";
import { RESET_POKE_TYPE_LIST } from "@store/SearchType/decidePokeType/types";

const initialState: ShowDataState = {
	pokeId: 0
};

const dataReducer = (
	state = initialState,
	action: ShowDataActionTypes
): ShowDataState => {
	switch (action.type) {
		case SHOW_POKE_DATA:
			return {
				...state,
				...action.payload
			};

		case RESET_POKE_TYPE_LIST:
			return {
				...state,
				pokeId: 0
			};

		default:
			return state;
	}
};

export default dataReducer;
