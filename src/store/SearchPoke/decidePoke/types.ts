export const SEARCH_POKE_DATA = "SEARCH_POKE_DATA";

type DecidePokeAction = {
	type: typeof SEARCH_POKE_DATA;
	payload: {
		no: number;
		errorMessage: boolean;
	};
};

export type DecidePokeActionTypes = DecidePokeAction;

export type DecidePokeState = {
	no: number;
	errorMessage: boolean;
};
