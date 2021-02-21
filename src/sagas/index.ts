import { fork, all } from "redux-saga/effects";
import { watchGetPokeData } from "@sagas/getPokeDataSaga";

export function* rootSaga() {
	yield all([fork(watchGetPokeData)]);
}
