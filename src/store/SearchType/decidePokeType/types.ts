export const DECIDE_POKE_TYPE = "DECIDE_POKE_TYPE";

type decidePokeType1Action = {
	type: typeof DECIDE_POKE_TYPE;
	payload: {
		pokeType1: string;
	};
};

export type decidePokeTypeActionTypes = decidePokeType1Action;

export type decidePokeTypeState = {
	pokeType1: string;
};
