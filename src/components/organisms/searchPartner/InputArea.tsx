import { VFC } from "react";
import {
	FormikTextField,
	FormikValue
} from "@components/molecules/FomikTextField";
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import { FormikProps } from "formik";
import { FixButton } from "@components/atoms/FixButton";

const useStyles = makeStyles(() =>
	createStyles({
		box: {
			position: "relative"
		},
		dlButton: {
			position: "absolute",
			right: 0,
			top: 0
		}
	})
);

type Props = {
	exportPng: () => void;
	formik: FormikProps<FormikValue>;
	DLBtnDisabled: boolean;
};

export const InputArea: VFC<Props> = ({ exportPng, formik, DLBtnDisabled }) => {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h2">3. 相棒検索</Typography>
			<Box mt={10} mx={20} className={classes.box}>
				<FormikTextField
					name="inputText"
					label="名前を入力しよう"
					text="決定"
					fieldTestId="searchPartner-input"
					buttonTestId="searchPartner-button"
					formik={formik}
					formikBtnDisabled={!formik.values.inputText}
				/>
				<Box className={classes.dlButton}>
					<FixButton
						type="submit"
						text="ダウンロード"
						disabled={DLBtnDisabled}
						onClick={exportPng}
						testId="searchPartner-DL-button"
					/>
				</Box>
			</Box>
		</>
	);
};
