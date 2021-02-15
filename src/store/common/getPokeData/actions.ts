import { formattedPokeDataType } from "./reducers";
import * as types from "./types";

// searchName
export const searchNameFetchStarted = () =>
	({ type: types.SEARCH_NAME_STARTED } as const);
export const searchNameFetchSuccess = (res: formattedPokeDataType) =>
	({ type: types.SEARCH_NAME_SUCCESS, payload: res } as const);
export const searchNameFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_NAME_FAILED, error: err.response } as const);

export type searchNameActionTypes =
	| ReturnType<typeof searchNameFetchStarted>
	| ReturnType<typeof searchNameFetchSuccess>
	| ReturnType<typeof searchNameFetchFailed>;

// searchType
export const searchTypeFetchStarted = () =>
	({ type: types.SEARCH_TYPE_STARTED } as const);
export const searchTypeFetchSuccess = (res: formattedPokeDataType) =>
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
export const searchPartnerFetchSuccess = (res: formattedPokeDataType) =>
	({ type: types.SEARCH_PARTNER_SUCCESS, payload: res } as const);
export const searchPartnerFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_PARTNER_FAILED, error: err.response } as const);

export type searchPartnerActionTypes =
	| ReturnType<typeof searchPartnerFetchStarted>
	| ReturnType<typeof searchPartnerFetchSuccess>
	| ReturnType<typeof searchPartnerFetchFailed>;
