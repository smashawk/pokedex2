import React, { useEffect, useMemo } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Switcher } from "@components/atoms/Switcher";
import { SuggestMultiTextField } from "@components/atoms/SuggestMultiTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { getPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import typeData from "@data/type_data.json";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type StateProps = {
	switchState: boolean;
	optionArray: OptionType[];
	pokeTypeData: getPokeTypeDataType;
	pokeData: formattedPokeDataType;
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
	pokeTypeData,
	pokeData,
	setSwitchState,
	setSelectedOption,
	fetchPokeTypeData
}: Props): JSX.Element => {
	// サジェスト用の配列を作る
	const suggestArray = useMemo(
		() =>
			typeData.map((value) => {
				return {
					value: value.en,
					label: value.ja,
					no: value.no
				};
			}),
		[]
	);

	// React Router Hooksの定義
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const switchType = query.get("switch");
		const type1 = query.get("type1");
		const type2 = query.get("type2");
		const pokemon = query.get("pokemon");

		// 一度何か操作していた場合、URLにQuery Stringsを付け続ける
		if (
			!switchType ||
			(pokeTypeData.type1.type && !type1) ||
			(pokeTypeData.type2.type && !type2) ||
			(pokeData.id && !pokemon)
		) {
			H.replace(
				`/type?switch=${switchState}&type1=${pokeTypeData.type1.type}&type2=${pokeTypeData.type2.type}&pokemon=${pokeData.id}`
			);
			return;
		}

		// URLにparamsがついている場合、検索結果を表示する
		if (switchType) {
			setSwitchState(switchType === "true");
		}
		if (type1 || type2) {
			const selectedOptionArray = suggestArray.filter(
				(item) => item.value === type1 || item.value === type2
			);

			setSelectedOption(selectedOptionArray);
			fetchPokeTypeData(selectedOptionArray, optionArray);
		}
	}, []);

	const decidePokeType = (selectedOptionArray: OptionType[]): void => {
		setSelectedOption(selectedOptionArray);
		fetchPokeTypeData(selectedOptionArray, optionArray);

		// paramsを付ける
		H.replace(
			`/type?switch=${switchState}&type1=${
				selectedOptionArray.length ? selectedOptionArray[0].value : ""
			}&type2=${
				selectedOptionArray.length === 2 ? selectedOptionArray[1].value : ""
			}&pokemon=${pokeData.id ? pokeData.id : ""}`
		);
	};

	const changeSearchType = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setSwitchState(event.target.checked);

		// paramsを付ける
		H.replace(
			`/type?switch=${event.target.checked}&type1=${pokeTypeData.type1.type}&type2=${pokeTypeData.type2.type}&pokemon=${pokeData.id}`
		);
	};

	return (
		<Container>
			<Typography variant="h2">2. タイプ検索</Typography>
			<Switcher
				checked={switchState}
				label="AND/OR"
				onChange={changeSearchType}
			/>
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
	optionArray: state.searchType.selectedOption.option,
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
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
