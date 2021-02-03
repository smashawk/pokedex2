import { Dispatch } from "react";
import { getPokeSpecies } from "@api/requests/getPokeSpecies";
import * as actions from "./actions";

export const searchPokeGetPokeSpeciesDispatcher = (
	// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	dispatch: Dispatch<any>
) => async (no: number): Promise<void> => {
	dispatch(actions.fetchStarted());
	await getPokeSpecies(no)
		.then((res) => {
			dispatch(actions.fetchSuccess(res.data));
		})
		.catch((e) => {
			dispatch(actions.fetchFailed({ error: e.response }));
		});
};
