import { createMuiTheme } from "@material-ui/core";

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
