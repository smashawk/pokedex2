import {
	ShowDataState,
	ShowDataActionTypes,
	SHOW_POKE_DATA
} from "@js/types/SearchType/showDataTypes";
import { RESET_POKE_TYPE_LIST } from "@js/types/SearchType/decidePokeTypeTypes";

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
