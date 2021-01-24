import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { FixButton } from "@components/atoms/FixButton";
import { dispatches } from "@store/dispatches";
import typeData from "@data/type_data.json";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type DispatchProps = {
	decidePokeType1: (value: string) => void;
	decidePokeType2: (value: string) => void;
	resetType: () => void;
};

type Props = DispatchProps;

const InputArea = ({
	decidePokeType1,
	decidePokeType2,
	resetType
}: Props): JSX.Element => {
	const options = typeData.map((value, index) => {
		const key = `index_${index}`;
		const JaType = value.ja;
		return (
			<option value={JaType} key={key}>
				{JaType}
			</option>
		);
	});

	const decidePokeType1Func = (event: any): void => {
		const { value } = event.target;
		decidePokeType1(value);
	};
	const decidePokeType2Func = (event: any): void => {
		const { value } = event.target;
		decidePokeType2(value);
	};
	const resetTypeFunc = (): void => {
		resetType();
	};

	return (
		<Container>
			<Typography variant="h2">2. タイプ検索</Typography>
			<select id="typeSelector1" onChange={decidePokeType1Func}>
				<option value="-">-</option>
				{options}
			</select>
			<select id="typeSelector2" onChange={decidePokeType2Func}>
				<option value="-">-</option>
				{options}
			</select>
			<FixButton
				color="primary"
				text="タイプリセット"
				variant="contained"
				onClick={resetTypeFunc}
			/>
		</Container>
	);
};

// container
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		decidePokeType1: (value: string): void => {
			searchType.decidePokeType1Dispatcher(dispatch)(value);
		},
		decidePokeType2: (value: string): void => {
			searchType.decidePokeType2Dispatcher(dispatch)(value);
		},
		resetType: (): void => {
			searchType.resetTypeDispatcher(dispatch);
		}
	};
};

export const InputAreaComp = connect(null, mapDispatchToProps)(InputArea);
