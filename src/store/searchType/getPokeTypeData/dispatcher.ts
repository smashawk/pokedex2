import { Dispatch } from "react";
import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import { normalizePokeData } from "./normalizer";
import * as actions from "./actions";

export const searchTypeGetPokeTypeDataDispatcher = (
	// anyの許容：https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9611
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	dispatch: Dispatch<any>
) => async (typeName: string): Promise<void> => {
	dispatch(actions.fetchStarted());
	await getPokeTypeData(typeName)
		.then((res) => {
			const formattedPokeData = normalizePokeData(res.data);
			dispatch(actions.fetchSuccess(formattedPokeData));
		})
		.catch((e) => {
			dispatch(actions.fetchFailed({ error: e.response }));
		});
};
