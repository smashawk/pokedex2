import { Dispatch } from "react";
import { getPokeSpecies } from "@api/requests/getPokeSpecies";
import * as actions from "./actions";
import { normalizePokeData } from "./normalizer";

// searchName
export const searchNameGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchNameActionTypes>
) => async (no: number): Promise<void> => {
	if (!no) return;
	dispatch(actions.searchNameFetchStarted());
	await getPokeSpecies(no)
		.then((res) => {
			const normalizedPokeData = normalizePokeData(res.data);
			dispatch(actions.searchNameFetchSuccess(normalizedPokeData));
		})
		.catch((e) => {
			dispatch(actions.searchNameFetchFailed({ error: e.response }));
		});
};

// searchType
export const searchTypeGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => async (no: number): Promise<void> => {
	if (!no) return;
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
	if (!no) return;
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
