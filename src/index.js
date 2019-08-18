import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import AppComponent from './js/components/AppComponent'
import { createStore } from 'redux';
import rootReducer from './js/reducers/index';
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

// ストアを作る
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'));