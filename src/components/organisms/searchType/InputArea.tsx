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
	option: OptionType[];
};

type DispatchProps = {
	setSelectedOption: (option: OptionType[]) => void;
	fetchPokeTypeData: (value: string) => void;
};

type Props = StateProps & DispatchProps;

const InputArea = ({
	option,
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

	const decidePokeType = (selectedOption: OptionType[] | null): void => {
		console.log("stype", selectedOption);
		if (selectedOption === null) return;
		setSelectedOption(selectedOption);
		// fetchPokeTypeData(selectedOption.value);
	};

	return (
		<Container>
			<Typography variant="h2">2. タイプ検索</Typography>
			<SuggestMultiTextField
				suggestList={suggestArray}
				option={option}
				onChange={decidePokeType}
			/>
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	option: state.searchType.selectedOption.option
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		setSelectedOption: (option: OptionType[]): void => {
			searchType.setSelectedOptionDispatcher(dispatch)(option);
		},
		fetchPokeTypeData: (value: string): void => {
			searchType.getPokeTypeDataDispatcher(dispatch)(value);
		}
	};
};

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
