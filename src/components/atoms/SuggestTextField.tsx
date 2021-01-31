import React from "react";
import { OptionType } from "@store/searchPoke/decidePoke/types";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import VirtualizedSelect from "react-virtualized-select";
// anyの許容(使用するcssのため)
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-select/dist/react-select.css";
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
	value: OptionType | undefined;
	onChange: (option: any) => void;
};

type Props = OwnProps;

export const SuggestTextField = ({
	suggestList,
	value,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<VirtualizedSelect
				className={classes.select}
				options={suggestList}
				value={value}
				clearable={false}
				onChange={onChange}
			/>
		</div>
	);
};
