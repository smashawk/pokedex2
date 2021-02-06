import React, { useEffect, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";

import { SuggestTextField } from "@components/atoms/SuggestTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/searchPoke/setSelectedOption/reducer";
import { createSuggestArray } from "@utils/createSuggestArray";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type StateProps = {
	option: OptionType;
};

type DispatchProps = {
	setSelectedOption: (option: OptionType) => void;
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps & RouteComponentProps<{ id: string }>;

const InputArea = ({
	option,
	setSelectedOption,
	fetchPokeData,
	fetchPokeSpecies,
	...props
}: Props): JSX.Element => {
	// サジェスト用の配列を作る
	const suggestArray = useMemo(() => createSuggestArray(), []);

	useEffect(() => {
		const { id } = props.match.params;
		const numId = Number(id);

		// 一度ポケモン検索している場合、URLにparamsを付け続ける
		if (option.no && Number.isNaN(numId)) {
			props.history.replace(`/pokemon/${option.no}`);
			return;
		}

		// URLにparamsがついている場合、検索結果を表示する
		if (!Number.isNaN(numId)) {
			setSelectedOption(suggestArray[numId - 1]);
			fetchPokeData(numId);
			fetchPokeSpecies(numId);
		}
	}, []);

	const searchPoke = useCallback(
		(selectedOption: OptionType): void => {
			setSelectedOption(selectedOption);
			fetchPokeData(selectedOption.no);
			fetchPokeSpecies(selectedOption.no);

			// paramsを付ける
			props.history.replace(`/pokemon/${selectedOption.no}`);
		},
		[setSelectedOption, fetchPokeData, fetchPokeSpecies, props.history]
	);

	return (
		<Container>
			<Typography variant="h2">1. 名前検索</Typography>
			<SuggestTextField
				suggestList={suggestArray}
				option={option}
				onChange={searchPoke}
			/>
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	option: state.searchPoke.selectedOption.option
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchPoke } = dispatches;

	return {
		setSelectedOption: (option: OptionType): void => {
			searchPoke.setSelectedOptionDispatcher(dispatch)(option);
		},
		fetchPokeData: async (no: number): Promise<void> => {
			await searchPoke.getPokeDataDispatcher(dispatch)(no);
		},
		fetchPokeSpecies: async (no: number): Promise<void> => {
			await searchPoke.getPokeSpeciesDispatcher(dispatch)(no);
		}
	};
};

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
