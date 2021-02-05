import { Dispatch } from "react";
import * as actions from "./actions";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decidePokeType1Dispatcher = (dispatch: Dispatch<any>) => (
	value: string
): void => {
	dispatch(actions.decidePokeType1(value));
};
