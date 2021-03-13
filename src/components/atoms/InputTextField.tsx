import { VFC, ChangeEvent } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { InputProps as StandardInputProps } from "@material-ui/core/Input/Input";

export type Props = {
	label: string;
	type?: TextFieldProps["type"];
	size?: TextFieldProps["size"];
	variant?: TextFieldProps["variant"];
	inputProps?: StandardInputProps["inputProps"];
	testId?: string;
	name?: string;
	value?: string;
	onChange?: (e: ChangeEvent) => void;
};

export const InputTextField: VFC<Props> = ({
	label,
	type,
	size,
	variant,
	inputProps,
	testId,
	name,
	value,
	onChange
}) => {
	return (
		<TextField
			{...{ label, type, size, variant, inputProps, name, value, onChange }}
			data-testid={testId}
		/>
	);
};
