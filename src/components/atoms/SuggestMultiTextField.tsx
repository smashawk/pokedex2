import { ReactNode, VFC } from "react";
import { OptionType } from "@store/setSelectedOption/reducer";
import { createStyles, makeStyles, Box, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CheckBox } from "@components/atoms/CheckBox";

const useStyles = makeStyles(() =>
	createStyles({
		boxRoot: {
			width: 400
		},
		select: {
			textAlign: "left"
		},
		endAdornment: {
			top: -4
		}
	})
);

export type Props = {
	suggestList: OptionType[];
	option: OptionType[];
	onChange: (e: unknown, selectedOption: OptionType[]) => void;
	testId: string;
};

export const SuggestMultiTextField: VFC<Props> = ({
	suggestList,
	option,
	onChange,
	testId
}) => {
	const classes = useStyles();

	return (
		<Box mt={1} className={classes.boxRoot}>
			<Autocomplete
				multiple
				classes={{ endAdornment: classes.endAdornment }}
				options={suggestList}
				value={option[0]?.no !== 0 ? option : []}
				onChange={onChange}
				getOptionLabel={(item): string => item.label}
				getOptionDisabled={(): boolean => option.length > 1}
				getOptionSelected={(item, value): boolean => item.no === value.no}
				filterOptions={(items, params): OptionType[] => {
					return items.filter(
						(item) => item.value.indexOf(params.inputValue) !== -1
					);
				}}
				renderInput={(params): ReactNode => (
					<TextField {...params} label="Types" />
				)}
				renderOption={(optionObj, { selected }): JSX.Element => (
					<CheckBox isSelected={selected} label={optionObj.label} />
				)}
				data-testid={testId}
			/>
		</Box>
	);
};
