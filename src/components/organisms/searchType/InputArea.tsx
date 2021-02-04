import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { dispatches } from "@store/dispatches";
import typeData from "@data/type_data.json";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type DispatchProps = {
	fetchPokeTypeData: (value: string) => void;
};

type Props = DispatchProps;

const InputArea = ({ fetchPokeTypeData }: Props): JSX.Element => {
	const options = typeData.map((value, index) => {
		const key = `index_${index}`;
		const JaType = value.en;
		return (
			<option value={JaType} key={key}>
				{JaType}
			</option>
		);
	});

	const decidePokeType1Func = (event: any): void => {
		const { value } = event.target;
		fetchPokeTypeData(value);
	};

	return (
		<Container>
			<Typography variant="h2">2. タイプ検索</Typography>
			<select id="typeSelector1" onChange={decidePokeType1Func}>
				<option value="-">-</option>
				{options}
			</select>
		</Container>
	);
};

// container
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		fetchPokeTypeData: (value: string): void => {
			searchType.getPokeTypeDataDispatcher(dispatch)(value);
		}
	};
};

export const InputAreaComp = connect(null, mapDispatchToProps)(InputArea);
