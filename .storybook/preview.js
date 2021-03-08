import { ThemeProvider, CssBaseline } from "@material-ui/core";
import StoryRouter from "storybook-react-router";
import { theme } from "@styles/theme";

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	),
	StoryRouter()
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "light",
		values: [
			{
				name: "dark",
				value: "#333333"
			},
			{
				name: "gray",
				value: "#808080"
			},
			{
				name: "light",
				value: "#FFFFFF"
			}
		]
	}
};
