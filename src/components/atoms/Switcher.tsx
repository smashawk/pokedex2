import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

type OwnProps = {
	checked: boolean;
	label: string;
	onChange: (
		event: React.ChangeEvent<HTMLInputElement>,
		checked: boolean
	) => void;
};

type Props = OwnProps;

export const Switcher = ({ checked, label, onChange }: Props): JSX.Element => {
	const switchComp = (
		<Switch
			checked={checked}
			onChange={onChange}
			color="primary"
			inputProps={{ "aria-label": "primary checkbox" }}
		/>
	);

	return (
		<FormControlLabel control={switchComp} label={label} labelPlacement="top" />
	);
};
