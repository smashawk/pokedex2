import React from "react";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Autocomplete, {
	createFilterOptions
} from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

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

export const SuggestTextField = ({
	suggestList,
	option,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Autocomplete
				id="combo-box-demo"
				options={suggestList}
				getOptionLabel={(item): string => item.label}
				style={{ width: 300 }}
				onChange={onChange}
				renderInput={(params): React.ReactNode => (
					<TextField {...params} label="Pokemon" />
				)}
			/>
		</div>
	);
};
