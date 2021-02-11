import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import * as types from "./types";

// searchPoke
export const searchPokeFetchStarted = () =>
	({ type: types.SEARCH_POKE_STARTED } as const);
export const searchPokeFetchSuccess = (res: normalizedPokeSpeciesType) =>
	({ type: types.SEARCH_POKE_SUCCESS, payload: res } as const);
export const searchPokeFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_POKE_FAILED, error: err.response } as const);

export type searchPokeActionTypes =
	| ReturnType<typeof searchPokeFetchStarted>
	| ReturnType<typeof searchPokeFetchSuccess>
	| ReturnType<typeof searchPokeFetchFailed>;

// searchType
export const searchTypeFetchStarted = () =>
	({ type: types.SEARCH_TYPE_STARTED } as const);
export const searchTypeFetchSuccess = (res: normalizedPokeSpeciesType) =>
	({ type: types.SEARCH_TYPE_SUCCESS, payload: res } as const);
export const searchTypeFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_TYPE_FAILED, error: err.response } as const);

export type searchTypeActionTypes =
	| ReturnType<typeof searchTypeFetchStarted>
	| ReturnType<typeof searchTypeFetchSuccess>
	| ReturnType<typeof searchTypeFetchFailed>;

// searchPartner
export const searchPartnerFetchStarted = () =>
	({ type: types.SEARCH_PARTNER_STARTED } as const);
export const searchPartnerFetchSuccess = (res: normalizedPokeSpeciesType) =>
	({ type: types.SEARCH_PARTNER_SUCCESS, payload: res } as const);
export const searchPartnerFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_PARTNER_FAILED, error: err.response } as const);

export type searchPartnerActionTypes =
	| ReturnType<typeof searchPartnerFetchStarted>
	| ReturnType<typeof searchPartnerFetchSuccess>
	| ReturnType<typeof searchPartnerFetchFailed>;
