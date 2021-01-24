import { Dispatch } from "react";
import { getPokeData } from "@api/requests/getPokeData";
import * as actions from "./actions";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPokeDataDispatcher = (dispatch: Dispatch<any>) => async (
	no: number,
	text: string
): Promise<void> => {
	dispatch(actions.fetchStarted());
	await getPokeData(no)
		.then((res) => {
			dispatch(actions.fetchSuccess({ ...res.data, text }));
		})
		.catch((e) => {
			dispatch(actions.fetchFailed({ error: e.response }));
		});
};
