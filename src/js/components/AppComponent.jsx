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


const AppComponent = (props) => {
    
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

            <Route path="/pokemon"
              render={
                () => <SearchPoke
                  decidePoke={props.decidePoke}
                  no={props.no}
                  errorMessage={props.errorMessage}
                />
              }
            />

            <Route path="/type"
              render={
                () => <SearchType
                  decidePokeType1={props.decidePokeType1}
                  decidePokeType2={props.decidePokeType2}
                  pokeType1={props.pokeType1}
                  pokeType2={props.pokeType2}
                  showData={props.showData}
                  showShinyPoke={props.showShinyPoke}
                  id={props.id}
                  shinyId={props.shinyId}
                  clickMessage={props.clickMessage}
                />
              }
            />

            <Route path="/partner"
              render={
                () => <SearchPartner
                  fetchData={props.fetchData}
                  decidePartner={props.decidePartner}
                  inputName={props.inputName}
                  nijiData={props.nijiData}
                  partnerNo={props.partnerNo}
                  isDecision={props.isDecision}
                />
              }
            />

          </Switch>

        </main>
      </App>
    </HashRouter>
  )

}

export default AppComponent;
