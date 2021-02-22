import { VFC } from "react";
import { SuggestTextField } from "@components/atoms/SuggestTextField";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { Box, Typography } from "@material-ui/core";

type Props = {
	suggestList: OptionType[];
	option: OptionType;
	searchName: (event: unknown, selectedOption: OptionType | null) => void;
};

export const InputArea: VFC<Props> = ({ suggestList, option, searchName }) => {
	return (
		<Box>
			<Typography variant="h2">1. 名前検索</Typography>
			<Box mt={10} mx="auto" display="inline-block">
				<SuggestTextField
					suggestList={suggestList}
					option={option}
					onChange={searchName}
				/>
			</Box>
		</Box>
	);
};
