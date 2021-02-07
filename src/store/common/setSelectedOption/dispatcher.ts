import { Dispatch } from "react";
import { normalizeSelectedOption } from "@store/common/setSelectedOption/normalizer";
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
) => (optionArray: OptionType[]): void => {
	const normalizedOptionArray = normalizeSelectedOption(optionArray);
	dispatch(actions.searchTypeSetSelectedOption(normalizedOptionArray));
};
