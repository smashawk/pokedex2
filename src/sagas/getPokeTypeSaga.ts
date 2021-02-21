import { AppState } from "@store/reducer";
import { select, call, put, fork, takeEvery } from "redux-saga/effects";
import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import { normalizePokeData } from "@store/searchType/getPokeTypeData/normalizer";
import * as actions from "@store/searchType/getPokeTypeData/actions";
import * as types from "@store/searchType/getPokeTypeData/types";

function* getPokeType1Data() {
	const type = yield select(
		(state: AppState) => state.searchType.pokeTypeData.type1.type
	);
	try {
		const res = yield call(getPokeTypeData, type);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.type1FetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.type1FetchFailed({ error: e.response }));
	}
}

function* watchGetPokeType1Data() {
	yield takeEvery(types.POKE_TYPE1_STARTED, getPokeType1Data);
}

function* getPokeType2Data() {
	const type = yield select(
		(state: AppState) => state.searchType.pokeTypeData.type2.type
	);
	try {
		const res = yield call(getPokeTypeData, type);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.type2FetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.type2FetchFailed({ error: e.response }));
	}
}

function* watchGetPokeType2Data() {
	yield takeEvery(types.POKE_TYPE2_STARTED, getPokeType2Data);
}

export const getPokeTypeSagas = [
	fork(watchGetPokeType1Data),
	fork(watchGetPokeType2Data)
];
