import React from "react";
import {
	createMuiTheme,
	createStyles,
	makeStyles,
	ThemeProvider
} from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Paper, Tab, Tabs } from "@material-ui/core";

export const theme = createMuiTheme({
	palette: {
		text: {
			primary: "#000"
		}
	},
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

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1
		},
		mainWrapper: {
			textAlign: "center"
			// margin: theme.spacing(10, "auto")
		},
		toolBar: {
			justifyContent: "center"
		}
	})
);

type Props = {
	children: JSX.Element;
};

export const PokedexTemplate = ({ children }: Props): JSX.Element => {
	const classes = useStyles();

	const currentTab = useLocation().pathname;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container className={classes.mainWrapper} maxWidth="md">
				<header>
					<Paper className={classes.root}>
						<Tabs
							value={currentTab}
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab label="TOP" component={Link} value="/" to="/" />
							<Tab
								label="図鑑ナンバー検索"
								component={Link}
								value="/pokemon"
								to="/pokemon"
							/>
							<Tab
								label="タイプ検索"
								component={Link}
								value="/type"
								to="/type"
							/>
							<Tab
								label="相棒ポケモン検索"
								component={Link}
								value="/partner"
								to="/partner"
							/>
						</Tabs>
					</Paper>
				</header>
				<main>
					<h1>ポケモン図鑑</h1>
					{children}
				</main>
			</Container>
		</ThemeProvider>
	);
};
