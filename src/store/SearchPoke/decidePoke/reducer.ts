import {
	DecidePokeState,
	DecidePokeActionTypes,
	SEARCH_POKE_DATA
} from "@store/SearchPoke/decidePoke/types";

const initialState: DecidePokeState = {
	no: 0,
	errorMessage: false
};

const numberReducer = (
	state = initialState,
	action: DecidePokeActionTypes
): DecidePokeState => {
	switch (action.type) {
		case SEARCH_POKE_DATA:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};

export default numberReducer;
