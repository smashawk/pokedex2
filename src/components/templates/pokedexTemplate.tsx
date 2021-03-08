import { ReactNode, VFC } from "react";
import { EnhancedHeaderMenu } from "@containers/molecules/HeaderMenu";
import {
	createStyles,
	makeStyles,
	ThemeProvider,
	CssBaseline,
	Typography,
	Box
} from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			minHeight: "100vh",
			padding: 0,
			textAlign: "center",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_white.png)`,
			backgroundRepeat: "repeat"
		},
		main: {
			maxWidth: 960,
			margin: "0 auto",
			padding: "32px 0"
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
			<Box className={classes.root}>
				<EnhancedHeaderMenu />
				<main className={classes.main}>
					<Typography variant="h1">ポケモン図鑑</Typography>
					<Box mt={6}>
						<>{children}</>
					</Box>
				</main>
			</Box>
		</ThemeProvider>
	);
};
