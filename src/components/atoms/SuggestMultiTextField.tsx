import React from "react";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import VirtualizedSelect from "react-virtualized-select";
import "@styles/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

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

type OwnProps = {
	suggestList: OptionType[];
	option: OptionType[];
	onChange: (item: OptionType | OptionType[] | null) => void;
};

type Props = OwnProps;

export const SuggestMultiTextField = ({
	suggestList,
	option,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<VirtualizedSelect
				className={classes.select}
				options={suggestList}
				value={option.length === 0 || option[0].no !== 0 ? option : undefined}
				onChange={onChange}
				multi
			/>
		</div>
	);
};
