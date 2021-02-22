import { VFC } from "react";
import { FixButton } from "@components/atoms/FixButton";
import { Box, Typography, TextField } from "@material-ui/core";

type Props = {
	refFnc: (element: HTMLInputElement) => HTMLInputElement;
	searchPartner: () => void;
};

export const InputArea: VFC<Props> = ({ refFnc, searchPartner }) => {
	return (
		<>
			<Typography variant="h2">3. 相棒検索</Typography>
			<Box mt={10}>
				<TextField
					size="small"
					id="inputName"
					type="text"
					variant="filled"
					label="名前を入力しよう"
					inputRef={refFnc}
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
