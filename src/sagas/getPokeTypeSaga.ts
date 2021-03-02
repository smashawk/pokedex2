import { call, put, fork, takeEvery } from "redux-saga/effects";
import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import { normalizePokeData } from "@store/getPokeTypeData/normalizer";
import * as actions from "@store/getPokeTypeData/actions";
import * as types from "@store/getPokeTypeData/types";

function* getPokeType1Data(
	handler: typeof getPokeTypeData,
	action: ReturnType<typeof actions.type1FetchStarted>
) {
	const type = action.payload;
	try {
		const res = yield call(getPokeTypeData, type);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.type1FetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.type1FetchFailed({ error: e.response }));
	}
}

export function* watchGetPokeType1Data(handler: typeof getPokeTypeData) {
	yield takeEvery(types.POKE_TYPE1_STARTED, getPokeType1Data, handler);
}

function* getPokeType2Data(
	handler: typeof getPokeTypeData,
	action: ReturnType<typeof actions.type2FetchStarted>
) {
	const type = action.payload;
	try {
		const res = yield call(getPokeTypeData, type);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.type2FetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.type2FetchFailed({ error: e.response }));
	}
}

export function* watchGetPokeType2Data(handler: typeof getPokeTypeData) {
	yield takeEvery(types.POKE_TYPE2_STARTED, getPokeType2Data, handler);
}

export const getPokeTypeSagas = [
	fork(watchGetPokeType1Data, getPokeTypeData),
	fork(watchGetPokeType2Data, getPokeTypeData)
];
