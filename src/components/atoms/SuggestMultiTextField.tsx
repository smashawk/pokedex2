import React from "react";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Autocomplete, {
	createFilterOptions
} from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			margin: "auto",
			padding: 40,
			width: 280
		},
		select: {
			textAlign: "left"
		}
	})
);

export type OptionTypes = {
	label: string;
	value: string;
	no: number;
};

type OwnProps = {
	suggestList: OptionTypes[];
	option: any;
	onChange: any;
};

type Props = OwnProps;

export const SuggestMultiTextField = ({
	suggestList,
	option,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

	return (
		<div className={classes.root}>
			<Autocomplete
				multiple
				getOptionDisabled={(): boolean => option.length > 1}
				options={suggestList}
				getOptionLabel={(item): string => item.label}
				style={{ width: 300 }}
				renderOption={(optionObj, { selected }) => (
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
				onChange={onChange}
				renderInput={(params): React.ReactNode => (
					<TextField {...params} label="Types" />
				)}
			/>
		</div>
	);
};
