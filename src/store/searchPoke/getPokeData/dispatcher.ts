import { Dispatch } from "react";
import { getPokeData } from "@api/requests/getPokeData";
import { normalizePokeData } from "./normalizer";
import * as actions from "./actions";

export const searchPokeGetPokeDataDispatcher = (
	// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	dispatch: Dispatch<any>
) => async (no: number): Promise<void> => {
	dispatch(actions.fetchStarted());
	await getPokeData(no)
		.then((res) => {
			const formattedPokeData = normalizePokeData(res.data);
			dispatch(actions.fetchSuccess(formattedPokeData));
		})
		.catch((e) => {
			dispatch(actions.fetchFailed({ error: e.response }));
		});
};
