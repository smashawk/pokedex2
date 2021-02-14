import { ReactNode } from "react";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import { Container, TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			margin: "auto",
			padding: 40,
			width: 480
		},
		root: {
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

export const SuggestMultiTextField = ({
	suggestList,
	option,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

	return (
		<Container className={classes.container}>
			<Autocomplete
				multiple
				classes={{ endAdornment: classes.endAdornment, root: classes.root }}
				options={suggestList}
				value={option[0]?.no !== 0 ? option : []}
				onChange={onChange}
				getOptionLabel={(item): string => item.label}
				getOptionDisabled={(): boolean => option.length > 1}
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
		</Container>
	);
};
