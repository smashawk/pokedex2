import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import React, { HTMLAttributes } from "react";
import Select, { ActionMeta } from "react-select";
import { ControlProps } from "react-select/src/components/Control";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			padding: 40
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

type InputComponentProps = Pick<BaseTextFieldProps, "inputRef"> &
	HTMLAttributes<HTMLDivElement>;

type OwnProps = {
	placeholder: string;
	suggestList: OptionType[];
	value: OptionType | undefined;
	onChange: (
		value: OptionType | null,
		actionMeta: ActionMeta<OptionType>
	) => void;
};

type Props = OwnProps;

const inputComponent = ({
	inputRef,
	...props
}: InputComponentProps): JSX.Element => {
	return <div ref={inputRef} {...props} />;
};

const Control = (props: ControlProps<OptionType, false>): JSX.Element => {
	const {
		children,
		innerProps,
		innerRef,
		selectProps: { classes }
	} = props;

	return (
		<TextField
			InputProps={{
				inputComponent,
				inputProps: {
					className: classes.input,
					ref: innerRef,
					children,
					...innerProps
				}
			}}
		/>
	);
};

// anyの許容:eventオブジェクトの違い
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Option = (props: any): JSX.Element => {
	return (
		<MenuItem
			ref={props.innerRef}
			selected={props.isFocused}
			style={{
				fontWeight: props.isSelected ? "bold" : 400,
				color: "#000"
			}}
			onClick={props.innerProps.onClick}
		>
			{props.children}
		</MenuItem>
	);
};

const components = {
	Control,
	Option
};

export const SuggestTextField = ({
	placeholder,
	suggestList,
	value,
	onChange
}: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Select
				classes={classes}
				placeholder={placeholder}
				options={suggestList}
				components={components}
				value={value}
				onChange={onChange}
				styles={{
					singleValue: (base, state): any => ({
						...base,
						color: state.selectProps.menuIsOpen ? "#999" : "#000",
						display: state.selectProps.menuIsOpen ? "none" : "block"
					})
				}}
			/>
		</div>
	);
};
