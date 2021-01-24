import { Dispatch } from "react";
import { getPokeSpecies } from "@api/requests/getPokeSpecies";
import * as actions from "./actions";

// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPokeSpeciesDispatcher = (dispatch: Dispatch<any>) => async (
	partnerNo: number
): Promise<void> => {
	dispatch(actions.fetchStarted());
	await getPokeSpecies(partnerNo)
		.then((res) => {
			dispatch(actions.fetchSuccess(res.data));
		})
		.catch((e) => {
			dispatch(actions.fetchFailed({ error: e.response }));
		});
};
