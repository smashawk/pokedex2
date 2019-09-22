import React from 'react';
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import IndexPage from "./pages/IndexComponent";
import SearchPoke from "../containers/SearchPokeContainer";
import SearchType from '../containers/SearchTypeContainer';
import SearchPartner from '../containers/SearchPartnerContainer';


const App = styled.div`
  font-size: 1.6rem;
  width: 1120px;
  margin: 40px auto 0;
  text-align: center;
`;


const AppComponent = () => {

  return(
    <HashRouter hashType="noslash">
      <App>
        <header>
          <nav>
            <Link to="/">TOP</Link>/
            <Link to="/pokemon">図鑑ナンバー検索</Link>/
            <Link to="/type">タイプ検索</Link>/
            <Link to="/partner">相棒ポ○モン検索</Link>
          </nav>
        </header>
        <main>
        <h1>○ケモン図鑑</h1>
        <hr />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/pokemon" component={SearchPoke} />
            <Route path="/type" component={SearchType} />
            <Route path="/partner" component={SearchPartner} />
          </Switch>
        </main>
      </App>
    </HashRouter>
  )

}

export default AppComponent;
