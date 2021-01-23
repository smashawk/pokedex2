import { Dispatch } from "react";
import { getPokeData } from "@api/requests/getPokeData";
import * as actions from "./actions";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPokeDispatcher = (dispatch: Dispatch<any>) => async (
	partnerNo: number,
	inputName: string
): Promise<void> => {
	dispatch(actions.fetchStarted());
	await getPokeData(partnerNo)
		.then((res) => {
			dispatch(actions.fetchSuccess({ ...res.data, inputName }));
		})
		.catch((e) => {
			dispatch(actions.fetchFailed({ error: e.response }));
		});
};
