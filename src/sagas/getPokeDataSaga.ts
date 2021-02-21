import { AppState } from "@store/reducer";
import { select, call, put, takeEvery } from "redux-saga/effects";
import { getPokeData } from "@api/requests/getPokeData";
import { normalizePokeData } from "@store/common/getPokeData/normalizer";
import * as actions from "@store/common/getPokeData/actions";
import * as types from "@store/common/getPokeData/types";

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

export function* watchGetPokeData() {
	yield takeEvery(types.SEARCH_NAME_STARTED, searchNameGetPokeData);
}
