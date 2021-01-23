import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import {
	createMuiTheme,
	createStyles,
	makeStyles,
	Theme,
	ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import { Index } from "@components/pages/Index";
import { SearchPartnerComp } from "@components/pages/SearchPartner";
import { SearchTypeComp } from "@components/pages/SearchType";
import { SearchPokeComp } from "@components/pages/SearchPoke";

export const theme = createMuiTheme({
	typography: {
		htmlFontSize: 10,
		h2: {
			fontSize: 24,
			fontWeight: 700
		},
		body1: {
			fontSize: 20
		}
	}
});

const useStyles = makeStyles((theme: Theme) => ({
	mainWrapper: {
		textAlign: "center"
		// margin: theme.spacing(10, "auto")
	},
	toolBar: {
		justifyContent: "center"
	}
}));

export const App = (): JSX.Element => {
	const classes = useStyles();
	return (
		<HashRouter hashType="noslash">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container className={classes.mainWrapper} maxWidth="md">
					<header>
						<Toolbar component="nav" className={classes.toolBar}>
							<Link to="/">TOP</Link>
							<Link to="/pokemon">図鑑ナンバー検索</Link>
							<Link to="/type">タイプ検索</Link>
							<Link to="/partner">相棒ポ○モン検索</Link>
						</Toolbar>
					</header>
					<main>
						<h1>○ケモン図鑑</h1>
						<hr />
						<Switch>
							<Route exact path="/" component={Index} />
							<Route path="/pokemon" component={SearchPokeComp} />
							<Route path="/type" component={SearchTypeComp} />
							<Route path="/partner" component={SearchPartnerComp} />
						</Switch>
					</main>
				</Container>
			</ThemeProvider>
		</HashRouter>
	);
};
