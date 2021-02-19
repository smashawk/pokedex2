import { ReactNode, VFC } from "react";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import {
	createStyles,
	makeStyles,
	Box,
	TextField,
	Checkbox
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

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

type OwnProps = {
	suggestList: OptionType[];
	option: OptionType[];
	onChange: (e: unknown, selectedOption: OptionType[]) => void;
};

type Props = OwnProps;

export const SuggestMultiTextField: VFC<Props> = ({
	suggestList,
	option,
	onChange
}) => {
	const classes = useStyles();

	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
				renderInput={(params): ReactNode => (
					<TextField {...params} label="Types" />
				)}
				renderOption={(optionObj, { selected }): JSX.Element => (
					<>
						<Checkbox
							icon={icon}
							checkedIcon={checkedIcon}
							style={{ marginRight: 8 }}
							checked={selected}
						/>
						{optionObj.label}
					</>
				)}
			/>
		</Box>
	);
};
