import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
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
		input: {
			display: "flex",
			padding: 0,
			height: "auto",
			backgroundColor: "#fff",
			width: 400
		}
	})
);

export type OptionType = {
	label: string;
	value: string;
};

type OwnProps = {
	placeholder: string;
	suggestList: OptionType[];
	value: OptionType | undefined;
	onChange: any;
};

type Props = OwnProps;

export const SuggestTextField = ({
	placeholder,
	suggestList,
	value,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<VirtualizedSelect
				placeholder={placeholder}
				options={suggestList}
				value={value}
				clearable={false}
				onChange={onChange}
				style={{
					width: 200,
					margin: "auto",
					textAlign: "left"
				}}
			/>
		</div>
	);
};
