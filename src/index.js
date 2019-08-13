import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import AppContainer from './js/containers/AppContainer';
import { createStore } from 'redux';
import rootReducer from './js/reducers/index';
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

// ストアを作る
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));