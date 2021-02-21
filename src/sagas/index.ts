import { fork, all } from "redux-saga/effects";
import { helloSaga } from "@sagas/getPokeData";

export const rootSaga = function* () {
	yield all([fork(helloSaga)]);
};
