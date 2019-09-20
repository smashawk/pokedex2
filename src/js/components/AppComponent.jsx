import React from 'react';
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import IndexPage from "./pages/IndexComponent";
import SearchPokemon from "../containers/SearchPokemonContainer";
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
                <Link to="/partner">相棒ポケモン検索</Link>
              </nav>
            </header>
            <main>
            <h1>ポケモン図鑑</h1>
            <hr />

              <Switch>

                <Route exact path="/" component={IndexPage} />

                <Route path="/pokemon"
                  render={
                    () => <SearchPokemon
                      decidePokemon={props.decidePokemon}
                      no={props.no}
                      errorMessage={props.errorMessage}
                    />
                  }
                />

                <Route path="/type"
                  render={
                    () => <SearchType
                      decideType={props.decideType}
                      typeArray={props.typeArray}
                      showData={props.showData}
                      showShinyPokemon={props.showShinyPokemon}
                      id={props.id}
                      shinyId={props.shinyId}
                      clickMessage={props.clickMessage}
                    />
                  }
                />

                <Route path="/partner"
                  render={
                    () => <SearchPartner
                      decidePartner={props.decidePartner}
                      partnerNo={props.partnerNo}
                      inputNameValue={props.inputNameValue}
                      isDecision={props.isDecision}
                      fetchData={props.fetchData}
                      result={props.result}
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
