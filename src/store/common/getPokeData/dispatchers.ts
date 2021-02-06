import { Dispatch } from "react";
import { getPokeData } from "@api/requests/getPokeData";
import { normalizePokeData } from "./normalizer";
import * as actions from "./actions";

// searchPoke
export const searchPokeGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchPokeActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchPokeFetchStarted());
	await getPokeData(no)
		.then((res) => {
			const formattedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchPokeFetchSuccess(formattedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchPokeFetchFailed({ error: e.response }));
		});
};

// searchType
export const searchTypeGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchTypeFetchStarted());
	await getPokeData(no)
		.then((res) => {
			const formattedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchTypeFetchSuccess(formattedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchTypeFetchFailed({ error: e.response }));
		});
};

// searchPartner
export const searchPartnerGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchPartnerActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchPartnerFetchStarted());
	await getPokeData(no)
		.then((res) => {
			const formattedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchPartnerFetchSuccess(formattedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchPartnerFetchFailed({ error: e.response }));
		});
};
