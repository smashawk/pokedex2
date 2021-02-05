import { formattedPokeDataType } from "./reducers";
import * as types from "./types";

export const fetchStarted = () => ({ type: types.FETCH_STARTED } as const);
export const fetchSuccess = (res: formattedPokeDataType) =>
	({ type: types.FETCH_SUCCESS, payload: res } as const);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export const fetchFailed = (err: any) =>
	({ type: types.FETCH_FAILED, error: err } as const);

export type ActionTypes =
	| ReturnType<typeof fetchStarted>
	| ReturnType<typeof fetchSuccess>
	| ReturnType<typeof fetchFailed>;
