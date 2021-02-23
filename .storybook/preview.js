import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../src/styles/theme";

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	)
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" }
};
