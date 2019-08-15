import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexComponent";
import SearchPokemon from "../containers/SearchPokemonContainer";
import SearchType from '../containers/SearchTypeContainer';
import SearchPartner from '../containers/SearchPartnerContainer';

const AppComponent = (props) => {
    
  console.log('Apprender')

      return(
        <BrowserRouter>
          <div className="App">
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
                      id={props.id}
                      clickMessage={props.clickMessage}
                    />
                  }
                />

                <Route path="/partner"
                  render={
                    () => <SearchPartner
                      decidePartner={props.decidePartner}
                      partnerNo={props.partnerNo}
                      inputName={props.inputName}
                      isDecision={props.isDecision}
                    />
                  }
                />

              </Switch>

            </main>
          </div>
        </BrowserRouter>
      )
}

export default AppComponent;
