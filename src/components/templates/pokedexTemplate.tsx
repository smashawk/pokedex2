import { ReactNode, VFC } from "react";
import { HeaderMenu } from "@components/organisms/common/HeaderMenu";
import {
	createStyles,
	makeStyles,
	ThemeProvider,
	CssBaseline,
	Container,
	Typography,
	Box
} from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			padding: 0,
			textAlign: "center"
		},
		main: {
			marginTop: theme.spacing(8)
		}
	})
);

type Props = {
	children: ReactNode;
};

/**
 * Page Component's Template component which add HeaderMenu and H1 Title
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
				<HeaderMenu />
				<main className={classes.main}>
					<Typography variant="h1">ポケモン図鑑</Typography>
					<Box mt={6}>
						<>{children}</>
					</Box>
				</main>
			</Container>
		</ThemeProvider>
	);
};
