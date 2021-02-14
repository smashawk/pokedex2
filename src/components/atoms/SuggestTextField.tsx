import { ReactNode } from "react";
import { OptionType } from "@store/common/setSelectedOption/reducer";

import { Container, TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			margin: "auto",
			padding: 40,
			width: 380
		},
		root: {
			width: 300
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
};

type Props = OwnProps;

export const SuggestTextField = ({
	suggestList,
	option,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Autocomplete
				classes={{ endAdornment: classes.endAdornment, root: classes.root }}
				options={suggestList}
				value={option}
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
				blurOnSelect
			/>
		</Container>
	);
};
