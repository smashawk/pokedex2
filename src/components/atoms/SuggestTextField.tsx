import { ReactNode, VFC } from "react";
import { OptionType } from "@store/setSelectedOption/reducer";
import { createStyles, makeStyles, Box, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(() =>
	createStyles({
		boxRoot: {
			width: 320
		},
		select: {
			textAlign: "left"
		},
		endAdornment: {
			top: -4
		}
	})
);

type OwnProps = {
	suggestList: OptionType[];
	option: OptionType;
	onChange: (e: unknown, selectedOption: OptionType | null) => void;
	testId?: string;
};

export type Props = OwnProps;

export const SuggestTextField: VFC<Props> = ({
	suggestList,
	option,
	onChange,
	testId
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.boxRoot}>
			<Autocomplete
				classes={{ endAdornment: classes.endAdornment }}
				options={suggestList}
				value={option.value ? option : null}
				onChange={onChange}
				getOptionLabel={(item): string => item.label}
				getOptionSelected={(item, value): boolean => item.label === value.label}
				filterOptions={(items, params): OptionType[] => {
					return items.filter(
						(item) => item.value.indexOf(params.inputValue) !== -1
					);
				}}
				renderInput={(params): ReactNode => (
					<TextField {...params} label="Pokemon" />
				)}
				data-testid={testId}
			/>
		</Box>
	);
};
