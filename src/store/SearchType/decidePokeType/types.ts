export const DECIDE_POKE_TYPE = "DECIDE_POKE_TYPE";
export const RESET_POKE_TYPE_LIST = "RESET_POKE_TYPE_LIST";

type decidePokeType1Action = {
	type: typeof DECIDE_POKE_TYPE;
	payload: {
		pokeType1: string;
	};
};

type decidePokeType2Action = {
	type: typeof DECIDE_POKE_TYPE;
	payload: {
		pokeType2: string;
	};
};

type ResetPokeTypeAction = {
	type: typeof RESET_POKE_TYPE_LIST;
};

export type decidePokeTypeActionTypes =
	| decidePokeType1Action
	| decidePokeType2Action
	| ResetPokeTypeAction;

export type decidePokeTypeState = {
	pokeType1: string;
	pokeType2: string;
};
