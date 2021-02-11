import React from "react";
import {
	createMuiTheme,
	createStyles,
	makeStyles
} from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
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

export const Header = (): JSX.Element => {
	const classes = useStyles();

	const currentTab = useLocation().pathname;

	const menuInfo = [
		{
			label: "TOP",
			value: "/",
			id: 0
		},
		{
			label: "名前検索",
			value: "/pokemon",
			id: 1
		},
		{
			label: "タイプ検索",
			value: "/type",
			id: 2
		},
		{
			label: "相棒ポケモン検索",
			value: "/partner",
			id: 3
		}
	];

	return (
		<header>
			<Paper className={classes.root}>
				<Tabs
					value={currentTab}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					{menuInfo.map((item) => {
						return (
							<Tab
								key={item.id}
								label={item.label}
								value={item.value}
								to={item.value}
								component={Link}
							/>
						);
					})}
				</Tabs>
			</Paper>
		</header>
	);
};
