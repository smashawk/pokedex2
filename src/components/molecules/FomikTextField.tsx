import { VFC } from "react";
import { FixButton } from "@components/atoms/FixButton";
import { InputTextField } from "@components/atoms/InputTextField";
import { FormikProps } from "formik";

export type FormikValue = {
	inputText: string;
};

export type Props = {
	name: string;
	label: string;
	text: string;
	formik: FormikProps<FormikValue>;
	fieldTestId?: string;
	buttonTestId?: string;
};

export const FormikTextField: VFC<Props> = ({
	name,
	label,
	text,
	formik,
	fieldTestId,
	buttonTestId
}) => {
	return (
		<form onSubmit={formik.handleSubmit}>
			<InputTextField
				name={name}
				value={formik.values.inputText}
				label={label}
				size="small"
				variant="filled"
				onChange={formik.handleChange}
				inputProps={{ minLength: 1, maxLength: 16 }}
				data-testId={fieldTestId}
			/>
			<FixButton
				color="primary"
				text={text}
				variant="contained"
				testId={buttonTestId}
				type="submit"
			/>
		</form>
	);
};
