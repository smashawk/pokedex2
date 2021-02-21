import { all } from "redux-saga/effects";
import { getPokeDataSagas } from "@sagas/getPokeDataSaga";

export function* rootSaga() {
	yield all([...getPokeDataSagas]);
}
