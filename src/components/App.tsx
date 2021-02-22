import { VFC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Index } from "@components/pages/Index";
import { SearchPartner } from "@components/pages/SearchPartner";
import { SearchType } from "@components/pages/SearchType";
import { SearchName } from "@components/pages/SearchName";

/**
 * Routing component
 */
export const App: VFC = () => {
	return (
		<HashRouter hashType="noslash">
			<Switch>
				<Route exact path="/" component={Index} />
				<Route exact path="/pokemon" component={SearchName} />
				<Route path="/pokemon/:id" component={SearchName} />
				<Route path="/type" component={SearchType} />
				<Route path="/partner" component={SearchPartner} />
			</Switch>
		</HashRouter>
	);
};
