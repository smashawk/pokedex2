import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { Switcher } from "@components/atoms/Switcher";
import { SuggestMultiTextField } from "@components/atoms/SuggestMultiTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import typeData from "@data/type_data.json";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type StateProps = {
	switchState: boolean;
	optionArray: OptionType[];
};

type DispatchProps = {
	setSwitchState: (switchState: boolean) => void;
	setSelectedOption: (option: OptionType[]) => void;
	fetchPokeTypeData: (
		selectedOptionArray: OptionType[],
		optionArray: OptionType[]
	) => void;
};

type Props = StateProps & DispatchProps;

const InputArea = ({
	switchState,
	optionArray,
	setSwitchState,
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

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setSwitchState(event.target.checked);
	};

	return (
		<Container>
			<Typography variant="h2">2. タイプ検索</Typography>
			<Switcher checked={switchState} label="AND/OR" onChange={handleChange} />
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
	switchState: state.searchType.switchState.switchState,
	optionArray: state.searchType.selectedOption.option
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		setSwitchState: (switchState: boolean): void => {
			searchType.setSwitchStateDispatcher(dispatch)(switchState);
		},
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
