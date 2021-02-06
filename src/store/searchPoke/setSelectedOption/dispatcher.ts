import { Dispatch } from "react";
import { ActionTypes, setSelectedOption } from "./actions";
import { OptionType } from "./reducer";

export const setSelectedOptionDispatcher = (
	dispatch: Dispatch<ActionTypes>
) => (option: OptionType): void => {
	dispatch(setSelectedOption(option));
};
