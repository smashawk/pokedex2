import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Index } from "@components/pages/Index";
import { SearchPartner } from "@components/pages/SearchPartner";
import { SearchType } from "@components/pages/SearchType";
import { SearchPoke } from "@components/pages/SearchPoke";

const Wrapper = styled.div`
	font-size: 1.6rem;
	width: 1120px;
	margin: 40px auto 0;
	text-align: center;
`;

export const App = (): JSX.Element => {
	return (
		<HashRouter hashType="noslash">
			<Wrapper>
				<header>
					<nav>
						<Link to="/">TOP</Link>
						<span>|</span>
						<Link to="/pokemon">図鑑ナンバー検索</Link>
						<span>|</span>
						<Link to="/type">タイプ検索</Link>
						<span>|</span>
						<Link to="/partner">相棒ポ○モン検索</Link>
					</nav>
				</header>
				<main>
					<h1>○ケモン図鑑</h1>
					<hr />
					<Switch>
						<Route exact path="/" component={Index} />
						<Route path="/pokemon" component={SearchPoke} />
						<Route path="/type" component={SearchType} />
						<Route path="/partner" component={SearchPartner} />
					</Switch>
				</main>
			</Wrapper>
		</HashRouter>
	);
};
