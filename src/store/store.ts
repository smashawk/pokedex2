import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "@store/reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "@sagas/index";

const isLocal = process.env.REACT_APP_ENV === "local";

const sagaMiddleware = createSagaMiddleware();

export const store = isLocal
	? createStore(
			rootReducer,
			composeWithDevTools(applyMiddleware(sagaMiddleware))
	  )
	: createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
