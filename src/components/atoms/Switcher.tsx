import { ChangeEvent, VFC } from "react";
import {
	makeStyles,
	createStyles,
	Switch,
	FormControlLabel
} from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		switchBase: {
			color: theme.palette.primary.main,
			"&$checked": {
				color: theme.palette.secondary.main
			},
			"&$checked + $track": {
				backgroundColor: theme.palette.secondary.main
			}
		},
		checked: {},
		track: { backgroundColor: theme.palette.primary.main }
	})
);

export type Props = {
	checked: boolean;
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	testId?: string;
};

export const Switcher: VFC<Props> = ({ checked, label, onChange, testId }) => {
	const classes = useStyles();
	const switchComp = (
		<Switch
			classes={{
				switchBase: classes.switchBase,
				checked: classes.checked,
				track: classes.track
			}}
			checked={checked}
			onChange={onChange}
			color="primary"
			inputProps={{ "aria-label": "primary checkbox" }}
			data-testId={testId}
		/>
	);

	return (
		<FormControlLabel control={switchComp} label={label} labelPlacement="top" />
	);
};
