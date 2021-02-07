import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { SuggestMultiTextField } from "@components/atoms/SuggestMultiTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import typeData from "@data/type_data.json";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type StateProps = {
	optionArray: OptionType[];
};

type DispatchProps = {
	setSelectedOption: (option: OptionType[]) => void;
	fetchPokeTypeData: (
		selectedOptionArray: OptionType[],
		optionArray: OptionType[]
	) => void;
};

type Props = StateProps & DispatchProps;

const InputArea = ({
	optionArray,
	setSelectedOption,
	fetchPokeTypeData
}: Props): JSX.Element => {
	const suggestArray = typeData.map((value) => {
		return {
			value: value.en,
			label: value.ja,
			no: value.no
		};
	});

	const decidePokeType = (selectedOptionArray: OptionType[]): void => {
		setSelectedOption(selectedOptionArray);
		fetchPokeTypeData(selectedOptionArray, optionArray);
	};

	return (
		<Container>
			<Typography variant="h2">2. タイプ検索</Typography>
			<SuggestMultiTextField
				suggestList={suggestArray}
				option={optionArray}
				onChange={decidePokeType}
			/>
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	optionArray: state.searchType.selectedOption.option
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		setSelectedOption: (optionArray: OptionType[]): void => {
			searchType.setSelectedOptionDispatcher(dispatch)(optionArray);
		},
		fetchPokeTypeData: (
			selectedOptionArray: OptionType[],
			optionArray: OptionType[]
		): void => {
			searchType.getPokeTypeDataDispatcher(dispatch)(
				selectedOptionArray,
				optionArray
			);
		}
	};
};

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
