import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import AppComponent from "./components/AppComponent";
import "@styles/reset.css";

ReactDOM.render(
	<Provider store={store}>
		<AppComponent />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
