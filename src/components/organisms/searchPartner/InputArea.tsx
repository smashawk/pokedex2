import { VFC } from "react";
import {
	FormikTextField,
	FormikValue
} from "@components/molecules/FomikTextField";
import { Box, Typography } from "@material-ui/core";
import { FormikProps } from "formik";

type Props = {
	formik: FormikProps<FormikValue>;
};

export const InputArea: VFC<Props> = ({ formik }) => {
	return (
		<>
			<Typography variant="h2">3. 相棒検索</Typography>
			<Box mt={10}>
				<FormikTextField
					name="inputText"
					label="名前を入力しよう"
					text="決定"
					fieldTestId="searchPartner-input"
					buttonTestId="searchPartner-button"
					formik={formik}
				/>
			</Box>
		</>
	);
};
