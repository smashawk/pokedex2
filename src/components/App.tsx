import { HashRouter, Route, Switch } from "react-router-dom";
import { Index } from "@components/pages/Index";
import { SearchPartnerComp } from "@components/pages/SearchPartner";
import { SearchTypeComp } from "@components/pages/SearchType";
import { SearchPokeComp } from "@components/pages/SearchPoke";

export const App = (): JSX.Element => {
	return (
		<HashRouter hashType="noslash">
			<Switch>
				<Route exact path="/" component={Index} />
				<Route exact path="/pokemon" component={SearchPokeComp} />
				<Route path="/pokemon/:id" component={SearchPokeComp} />
				<Route path="/type" component={SearchTypeComp} />
				<Route path="/partner" component={SearchPartnerComp} />
			</Switch>
		</HashRouter>
	);
};
