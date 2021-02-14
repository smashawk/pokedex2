import {
	createMuiTheme,
	createStyles,
	makeStyles,
	ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Header } from "@components/organisms/common/Header";

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

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container className={classes.mainWrapper} maxWidth="md">
				<Header />
				<main>
					<h1>ポケモン図鑑</h1>
					{children}
				</main>
			</Container>
		</ThemeProvider>
	);
};
