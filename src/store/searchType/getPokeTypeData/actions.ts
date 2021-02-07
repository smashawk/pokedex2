import { formattedPokeTypeDataType } from "./reducers";
import * as types from "./types";

// type1
export const type1FetchStarted = () =>
	({ type: types.POKE_TYPE1_STARTED } as const);
export const type1FetchSuccess = (res: formattedPokeTypeDataType) =>
	({ type: types.POKE_TYPE1_SUCCESS, payload: res } as const);
export const type1FetchFailed = (err: Record<string, unknown>) =>
	({ type: types.POKE_TYPE1_FAILED, error: err } as const);
// type2
export const type2FetchStarted = () =>
	({ type: types.POKE_TYPE2_STARTED } as const);
export const type2FetchSuccess = (res: formattedPokeTypeDataType) =>
	({ type: types.POKE_TYPE2_SUCCESS, payload: res } as const);
export const type2FetchFailed = (err: Record<string, unknown>) =>
	({ type: types.POKE_TYPE2_FAILED, error: err } as const);

// resetType
export const resetType1 = () => ({ type: types.POKE_TYPE1_RESET } as const);
export const resetType2 = () => ({ type: types.POKE_TYPE2_RESET } as const);

export type TypeActionTypes =
	| ReturnType<typeof type1FetchStarted>
	| ReturnType<typeof type1FetchSuccess>
	| ReturnType<typeof type1FetchFailed>
	| ReturnType<typeof type2FetchStarted>
	| ReturnType<typeof type2FetchSuccess>
	| ReturnType<typeof type2FetchFailed>
	| ReturnType<typeof resetType1>
	| ReturnType<typeof resetType2>;
