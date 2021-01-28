import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type OwnProps = {
	label: string;
	type: TextFieldProps["type"];
	variant?: TextFieldProps["variant"];
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Props = OwnProps;

export const InputTextField = ({
	label,
	type,
	variant,
	onChange
}: Props): JSX.Element => {
	return (
		<TextField
			type={type}
			onChange={onChange}
			label={label}
			/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
			variant={variant as any} // anyの許容：https://github.com/mui-org/material-ui/issues/15697#issuecomment-493419773
		/>
	);
};
