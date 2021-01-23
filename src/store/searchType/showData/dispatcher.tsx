import { Dispatch } from "react";
import { showData } from "@store/searchType/showData/actions";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const showDataDispatcher = (dispatch: Dispatch<any>) => (
	no: number
): void => {
	dispatch(showData(no));
};
