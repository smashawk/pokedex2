import { VFC } from "react";
import { FixButton } from "@components/atoms/FixButton";
import { InputTextField } from "@components/atoms/InputTextField";
import { Box, Typography } from "@material-ui/core";

type Props = {
	refFnc: (element: HTMLInputElement) => HTMLInputElement;
	searchPartner: () => void;
};

export const InputArea: VFC<Props> = ({ refFnc, searchPartner }) => {
	return (
		<>
			<Typography variant="h2">3. 相棒検索</Typography>
			<Box mt={10}>
				<InputTextField
					label="名前を入力しよう"
					size="small"
					type="text"
					variant="filled"
					inputRef={refFnc}
					inputProps={{ minLength: 1, maxLength: 16 }}
				/>
				<FixButton
					color="primary"
					text="決定"
					variant="contained"
					onClick={searchPartner}
				/>
			</Box>
		</>
	);
};
