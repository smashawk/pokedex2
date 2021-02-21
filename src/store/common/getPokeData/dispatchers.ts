import { Dispatch } from "react";
import { getPokeData } from "@api/requests/getPokeData";
import { normalizePokeData } from "./normalizer";
import * as actions from "./actions";

/** searchName */
export const searchNameGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchNameActionTypes>
) => (no: number): void => {
	dispatch(actions.searchNameFetchStarted(no));
};

/** searchType */
export const searchTypeGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => async (no: number): Promise<void> => {
	if (!no) {
		dispatch(actions.searchTypeDataReset());
		return;
	}
	dispatch(actions.searchTypeFetchStarted());
	await getPokeData(no)
		.then((res) => {
			const normalizedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchTypeFetchSuccess(normalizedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchTypeFetchFailed({ error: e.response }));
		});
};

/** searchPartner */
export const searchPartnerGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchPartnerActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchPartnerFetchStarted());
	await getPokeData(no)
		.then((res) => {
			const normalizedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchPartnerFetchSuccess(normalizedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchPartnerFetchFailed({ error: e.response }));
		});
};
