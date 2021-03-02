import { call, put, fork, takeEvery } from "redux-saga/effects";
import { getPokeSpecies } from "@api/requests/getPokeSpecies";
import { normalizePokeData } from "@store/getPokeSpecies/normalizer";
import * as actions from "@store/getPokeSpecies/actions";
import * as types from "@store/getPokeSpecies/types";

/** searchName */
function* searchNameGetPokeSpecies(
	handler: typeof getPokeSpecies,
	action: ReturnType<typeof actions.searchNameFetchStarted>
) {
	const { id } = action.payload;
	try {
		const res = yield call(getPokeSpecies, id);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchNameFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchNameFetchFailed({ error: e.response }));
	}
}

export function* watchSearchNameGetPokeSpecies(handler: typeof getPokeSpecies) {
	yield takeEvery(types.SEARCH_NAME_STARTED, searchNameGetPokeSpecies, handler);
}

/** searchType */
function* searchTypeGetPokeSpecies(
	handler: typeof getPokeSpecies,
	action: ReturnType<typeof actions.searchTypeFetchStarted>
) {
	const { id } = action.payload;
	try {
		const res = yield call(getPokeSpecies, id);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchTypeFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchTypeFetchFailed({ error: e.response }));
	}
}

export function* watchSearchTypeGetPokeSpecies(handler: typeof getPokeSpecies) {
	yield takeEvery(types.SEARCH_TYPE_STARTED, searchTypeGetPokeSpecies, handler);
}

/** searchPartner */
function* searchPartnerGetPokeSpecies(
	handler: typeof getPokeSpecies,
	action: ReturnType<typeof actions.searchPartnerFetchStarted>
) {
	const { id } = action.payload;
	try {
		const res = yield call(getPokeSpecies, id);
		const normalizedPokeData = normalizePokeData(res.data);
		yield put(actions.searchPartnerFetchSuccess(normalizedPokeData));
	} catch (e) {
		yield put(actions.searchPartnerFetchFailed({ error: e.response }));
	}
}

export function* watchSearchPartnerGetPokeSpecies(
	handler: typeof getPokeSpecies
) {
	yield takeEvery(
		types.SEARCH_PARTNER_STARTED,
		searchPartnerGetPokeSpecies,
		handler
	);
}

export const getPokeSpeciesSagas = [
	fork(watchSearchNameGetPokeSpecies, getPokeSpecies),
	fork(watchSearchTypeGetPokeSpecies, getPokeSpecies),
	fork(watchSearchPartnerGetPokeSpecies, getPokeSpecies)
];
