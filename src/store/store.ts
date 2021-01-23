import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
// import sagas from "@saga/sagas";
import rootReducer from "@store/reducer";

// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware();

// Saga を起動する（NIJBOX_社員APIを使用する場合
// sagaMiddleware.run(sagas);

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
