import { ReactNode, VFC } from "react";
import { Header } from "@components/organisms/common/Header";
import {
	createMuiTheme,
	createStyles,
	makeStyles,
	ThemeProvider,
	CssBaseline,
	Container,
	Typography
} from "@material-ui/core";

export const theme = createMuiTheme({
	spacing: 4,
	typography: {
		htmlFontSize: 10,
		h1: {
			fontSize: 32,
			fontWeight: 700
		},
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
			padding: 0,
			textAlign: "center"
		},
		main: {
			marginTop: theme.spacing(8)
		},
		pageRoot: {
			marginTop: theme.spacing(6),
			padding: 0
		}
	})
);

type Props = {
	children: ReactNode;
};

/**
 * Page Component's Template component which add Header and H1 Title
 * @param children
 * @constructor
 */
export const PokedexTemplate: VFC<Props> = ({ children }) => {
	const classes = useStyles();

	return (
		/**
		 * wrap children in a React Fragment to avoid TS error
		 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051#issuecomment-520077292
		 * */
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container className={classes.root} maxWidth="md">
				<Header />
				<main className={classes.main}>
					<Typography variant="h1">ポケモン図鑑</Typography>
					<Container className={classes.pageRoot}>
						<>{children}</>
					</Container>
				</main>
			</Container>
		</ThemeProvider>
	);
};
