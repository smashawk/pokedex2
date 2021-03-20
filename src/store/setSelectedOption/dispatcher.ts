import { Dispatch } from "react";
import * as actions from "./actions";
import { OptionType } from "./reducer";

// searchName
export const searchNameSetSelectedOptionDispatcher = (
	dispatch: Dispatch<actions.SearchNameActionTypes>
) => (option: OptionType): void => {
	dispatch(actions.searchNameSetSelectedOption(option));
};

// searchType
export const searchTypeSetSelectedOptionDispatcher = (
	dispatch: Dispatch<actions.SearchTypeActionTypes>
) => (optionArray: OptionType[]): void => {
	dispatch(actions.searchTypeSetSelectedOption(optionArray));
};
