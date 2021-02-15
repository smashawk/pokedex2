import { VFC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Index } from "@components/pages/Index";
import { SearchPartnerComp } from "@components/pages/SearchPartner";
import { SearchTypeComp } from "@components/pages/SearchType";
import { SearchNameComp } from "@components/pages/SearchName";

/**
 * Routing component
 */
export const App: VFC = () => {
	return (
		<HashRouter hashType="noslash">
			<Switch>
				<Route exact path="/" component={Index} />
				<Route exact path="/pokemon" component={SearchNameComp} />
				<Route path="/pokemon/:id" component={SearchNameComp} />
				<Route path="/type" component={SearchTypeComp} />
				<Route path="/partner" component={SearchPartnerComp} />
			</Switch>
		</HashRouter>
	);
};
