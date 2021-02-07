import { Dispatch } from "react";
import * as actions from "./actions";
import { OptionType } from "./reducer";

// searchPoke
export const searchPokeSetSelectedOptionDispatcher = (
	dispatch: Dispatch<actions.searchPokeActionTypes>
) => (option: OptionType): void => {
	dispatch(actions.searchPokeSetSelectedOption(option));
};

// searchType
export const searchTypeSetSelectedOptionDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => (option: OptionType[]): void => {
	dispatch(actions.searchTypeSetSelectedOption(option));
};
