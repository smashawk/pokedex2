import { Dispatch } from "react";
import { ActionTypes, setSwitchState } from "./actions";

export const setSwitchStateDispatcher = (dispatch: Dispatch<ActionTypes>) => (
	switchState: boolean
): void => {
	dispatch(setSwitchState(switchState));
};
