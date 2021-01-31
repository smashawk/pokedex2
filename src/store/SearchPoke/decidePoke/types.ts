export const SEARCH_POKE_DATA = "SEARCH_POKE_DATA";

type DecidePokeAction = {
	type: typeof SEARCH_POKE_DATA;
	payload: {
		no: number;
		item: any;
	};
};

export type DecidePokeActionTypes = DecidePokeAction;

export type DecidePokeState = {
	no: number;
	item: any;
};
