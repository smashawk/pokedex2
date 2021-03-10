import { VFC } from "react";
import { FixButton } from "@components/atoms/FixButton";
import { InputTextField } from "@components/atoms/InputTextField";
import { Box, Typography } from "@material-ui/core";
import { useFormik } from "formik";

type Props = {
	searchPartner: (value: { inputText: string }) => void;
};

export const InputArea: VFC<Props> = ({ searchPartner }) => {
	const formik = useFormik({
		initialValues: { inputText: "" },
		validationSchema: null,
		onSubmit: searchPartner
	});

	return (
		<>
			<Typography variant="h2">3. 相棒検索</Typography>
			<Box mt={10}>
				<form onSubmit={formik.handleSubmit}>
					<InputTextField
						name="inputText"
						value={formik.values.inputText}
						label="名前を入力しよう"
						size="small"
						variant="filled"
						onChange={formik.handleChange}
						inputProps={{ minLength: 1, maxLength: 16 }}
						data-testId="searchPartner-input"
					/>
					<FixButton
						color="primary"
						text="決定"
						variant="contained"
						testId="searchPartner-button"
						type="submit"
					/>
				</form>
			</Box>
		</>
	);
};
