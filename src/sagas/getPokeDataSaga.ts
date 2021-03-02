import { call, put, fork, takeEvery } from "redux-saga/effects";
import { getPokeData } from "@api/requests/getPokeData";
import { normalizePokeData } from "@store/getPokeData/normalizer";
import * as actions from "@store/getPokeData/actions";
import * as types from "@store/getPokeData/types";

/** searchName */
function* searchNameGetPokeData(
	handler: typeof getPokeData,
	action: ReturnType<typeof actions.searchNameFetchStarted>
) {
	const { id } = action.payload;
	try {
		const res = yield call(handler, id);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchNameFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchNameFetchFailed({ error: e.response }));
	}
}

export function* watchSearchNameGetPokeData(handler: typeof getPokeData) {
	yield takeEvery(types.SEARCH_NAME_STARTED, searchNameGetPokeData, handler);
}

/** searchType */
function* searchTypeGetPokeData(
	handler: typeof getPokeData,
	action: ReturnType<typeof actions.searchTypeFetchStarted>
) {
	const { id } = action.payload;
	try {
		const res = yield call(getPokeData, id);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchTypeFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchTypeFetchFailed({ error: e.response }));
	}
}

export function* watchSearchTypeGetPokeData(handler: typeof getPokeData) {
	yield takeEvery(types.SEARCH_TYPE_STARTED, searchTypeGetPokeData, handler);
}

/** searchPartner */
function* searchPartnerGetPokeData(
	handler: typeof getPokeData,
	action: ReturnType<typeof actions.searchPartnerFetchStarted>
) {
	const { id } = action.payload;
	try {
		const res = yield call(getPokeData, id);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchPartnerFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchPartnerFetchFailed({ error: e.response }));
	}
}

export function* watchSearchPartnerGetPokeData(handler: typeof getPokeData) {
	yield takeEvery(
		types.SEARCH_PARTNER_STARTED,
		searchPartnerGetPokeData,
		handler
	);
}

export const getPokeDataSagas = [
	fork(watchSearchNameGetPokeData, getPokeData),
	fork(watchSearchTypeGetPokeData, getPokeData),
	fork(watchSearchPartnerGetPokeData, getPokeData)
];
