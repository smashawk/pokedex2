import { AppState } from "@store/reducer";
import { select, call, put, fork, takeEvery } from "redux-saga/effects";
import { getPokeData } from "@api/requests/getPokeData";
import { normalizePokeData } from "@store/common/getPokeData/normalizer";
import * as actions from "@store/common/getPokeData/actions";
import * as types from "@store/common/getPokeData/types";

/** searchName */
function* searchNameGetPokeData() {
	const no = yield select((state: AppState) => state.searchName.pokeData.id);
	try {
		const res = yield call(getPokeData, no);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchNameFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchNameFetchFailed({ error: e.response }));
	}
}

function* watchSearchNameGetPokeData() {
	yield takeEvery(types.SEARCH_NAME_STARTED, searchNameGetPokeData);
}

/** searchType */
function* searchTypeGetPokeData() {
	const no = yield select((state: AppState) => state.searchType.pokeData.id);
	try {
		const res = yield call(getPokeData, no);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchTypeFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchTypeFetchFailed({ error: e.response }));
	}
}

function* watchSearchTypeGetPokeData() {
	yield takeEvery(types.SEARCH_TYPE_STARTED, searchTypeGetPokeData);
}

/** searchPartner */
function* searchPartnerGetPokeData() {
	const no = yield select((state: AppState) => state.searchPartner.pokeData.id);
	try {
		const res = yield call(getPokeData, no);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchPartnerFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchPartnerFetchFailed({ error: e.response }));
	}
}

function* watchSearchPartnerGetPokeData() {
	yield takeEvery(types.SEARCH_PARTNER_STARTED, searchPartnerGetPokeData);
}

export const getPokeDataSagas = [
	fork(watchSearchNameGetPokeData),
	fork(watchSearchTypeGetPokeData),
	fork(watchSearchPartnerGetPokeData)
];
