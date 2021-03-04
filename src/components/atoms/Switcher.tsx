import { ChangeEvent, VFC } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

export type Props = {
	checked: boolean;
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	testId?: string;
};

export const Switcher: VFC<Props> = ({ checked, label, onChange, testId }) => {
	const switchComp = (
		<Switch
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
