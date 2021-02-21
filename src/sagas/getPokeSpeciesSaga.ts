import { AppState } from "@store/reducer";
import { select, call, put, fork, takeEvery } from "redux-saga/effects";
import { getPokeSpecies } from "@api/requests/getPokeSpecies";
import { normalizePokeData } from "@store/common/getPokeSpecies/normalizer";
import * as actions from "@store/common/getPokeSpecies/actions";
import * as types from "@store/common/getPokeSpecies/types";

/** searchName */
function* searchNameGetPokeSpecies() {
	const no = yield select((state: AppState) => state.searchName.pokeSpecies.id);
	try {
		const res = yield call(getPokeSpecies, no);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchNameFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchNameFetchFailed({ error: e.response }));
	}
}

function* watchSearchNameGetPokeSpecies() {
	yield takeEvery(types.SEARCH_NAME_STARTED, searchNameGetPokeSpecies);
}

/** searchType */
function* searchTypeGetPokeSpecies() {
	const no = yield select((state: AppState) => state.searchType.pokeSpecies.id);
	try {
		const res = yield call(getPokeSpecies, no);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchTypeFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchTypeFetchFailed({ error: e.response }));
	}
}

function* watchSearchTypeGetPokeSpecies() {
	yield takeEvery(types.SEARCH_TYPE_STARTED, searchTypeGetPokeSpecies);
}

/** searchPartner */
function* searchPartnerGetPokeSpecies() {
	const no = yield select(
		(state: AppState) => state.searchPartner.pokeSpecies.id
	);
	try {
		const res = yield call(getPokeSpecies, no);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchPartnerFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchPartnerFetchFailed({ error: e.response }));
	}
}

function* watchSearchPartnerGetPokeSpecies() {
	yield takeEvery(types.SEARCH_PARTNER_STARTED, searchPartnerGetPokeSpecies);
}

export const getPokeSpeciesSagas = [
	fork(watchSearchNameGetPokeSpecies),
	fork(watchSearchTypeGetPokeSpecies),
	fork(watchSearchPartnerGetPokeSpecies)
];
