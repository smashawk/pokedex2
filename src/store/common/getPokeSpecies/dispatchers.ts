import { Dispatch } from "react";
import { getPokeSpecies } from "@api/requests/getPokeSpecies";
import * as actions from "./actions";
import { normalizePokeData } from "./normalizer";

// searchPoke
export const searchPokeGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchPokeActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchPokeFetchStarted());
	await getPokeSpecies(no)
		.then((res) => {
			const normalizedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchPokeFetchSuccess(normalizedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchPokeFetchFailed({ error: e.response }));
		});
};

// searchType
export const searchTypeGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchTypeFetchStarted());
	await getPokeSpecies(no)
		.then((res) => {
			const normalizedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchTypeFetchSuccess(normalizedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchTypeFetchFailed({ error: e.response }));
		});
};

// searchPartner
export const searchPartnerGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchPartnerActionTypes>
) => async (no: number): Promise<void> => {
	dispatch(actions.searchPartnerFetchStarted());
	await getPokeSpecies(no)
		.then((res) => {
			const normalizedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchPartnerFetchSuccess(normalizedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchPartnerFetchFailed({ error: e.response }));
		});
};
