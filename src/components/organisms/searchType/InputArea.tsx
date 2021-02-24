import { ChangeEvent, VFC } from "react";
import { OptionType } from "@store/setSelectedOption/reducer";
import { Switcher } from "@components/atoms/Switcher";
import { SuggestMultiTextField } from "@components/atoms/SuggestMultiTextField";
import { createStyles, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		inputBox: {
			display: "flex",
			justifyContent: "center"
		}
	})
);

type Props = {
	suggestArray: OptionType[];
	optionArray: { option: OptionType[] };
	switchState: boolean;
	decidePokeType: (event: unknown, selectedOptionArray: OptionType[]) => void;
	toggleSearchType: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputArea: VFC<Props> = ({
	suggestArray,
	optionArray,
	switchState,
	decidePokeType,
	toggleSearchType
}) => {
	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h2">2. タイプ検索</Typography>
			<Box mt={9} className={classes.inputBox}>
				<SuggestMultiTextField
					suggestList={suggestArray}
					option={optionArray.option}
					onChange={decidePokeType}
				/>
				<Switcher
					checked={switchState}
					label="AND/OR"
					onChange={toggleSearchType}
				/>
			</Box>
		</Box>
	);
};
