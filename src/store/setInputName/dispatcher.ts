import { Dispatch } from "react";
import { ActionTypes, setInputName } from "./actions";

export const setInputNameDispatcher = (dispatch: Dispatch<ActionTypes>) => (
	inputName: string
): void => {
	dispatch(setInputName(inputName));
};
