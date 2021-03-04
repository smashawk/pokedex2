import { VFC } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { InputProps as StandardInputProps } from "@material-ui/core/Input/Input";

export type Props = {
	label: string;
	type: TextFieldProps["type"];
	size?: TextFieldProps["size"];
	variant?: TextFieldProps["variant"];
	inputProps?: StandardInputProps["inputProps"];
	inputRef?: (element: HTMLInputElement) => HTMLInputElement;
	testId?: string;
};

export const InputTextField: VFC<Props> = ({
	label,
	type,
	size,
	variant,
	inputRef,
	inputProps,
	testId
}) => {
	return (
		<TextField
			{...{ label, type, size, variant, inputRef, inputProps }}
			data-testId={testId}
		/>
	);
};
