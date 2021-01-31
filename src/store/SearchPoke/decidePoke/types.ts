export const SEARCH_POKE_DATA = "SEARCH_POKE_DATA";

export type OptionType = {
	label: string;
	value: string;
};

type DecidePokeAction = {
	type: typeof SEARCH_POKE_DATA;
	payload: {
		no: number;
		option: OptionType;
	};
};

export type DecidePokeActionTypes = DecidePokeAction;

export type DecidePokeState = {
	no: number;
	option: OptionType;
};
