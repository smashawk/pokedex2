import { all } from "redux-saga/effects";
import { getPokeDataSagas } from "@sagas/getPokeDataSaga";
import { getPokeSpeciesSagas } from "@sagas/getPokeSpeciesSaga";
import { getPokeTypeSagas } from "@sagas/getPokeTypeSaga";

export function* rootSaga() {
	yield all([...getPokeDataSagas, ...getPokeSpeciesSagas, ...getPokeTypeSagas]);
}
