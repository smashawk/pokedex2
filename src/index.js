import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import SearchPokemonContainer from './js/containers/SearchPokemonContainer';
import SearchTypeContainer from './js/containers/SearchTypeContainer';
import SearchPartnerContainer from './js/containers/SearchPartnerContainer';
import { createStore } from 'redux';
import rootReducer from './js/reducers/index';
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

// ストアを作る
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <h1>ポケモン図鑑</h1>
      <hr />
      <SearchPokemonContainer />
      <SearchTypeContainer />
      <SearchPartnerContainer />
    </div>
  </Provider>,
  document.getElementById('root'));