import React, { useEffect, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory, useParams } from "react-router-dom";

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

type Props = StateProps & DispatchProps;

const InputArea = ({
	option,
	setSelectedOption,
	fetchPokeData,
	fetchPokeSpecies
}: Props): JSX.Element => {
	// サジェスト用の配列を作る
	const suggestArray = useMemo(() => createSuggestArray(), []);

	// React Router Hooksの定義
	const H = useHistory();
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		const numId = Number(id);

		// 一度ポケモン検索している場合、URLにparamsを付け続ける
		if (option.no && Number.isNaN(numId)) {
			H.replace(`/pokemon/${option.no}`);
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
		(selectedOption: OptionType | null): void => {
			// 文字列が入力されていない時、及び直前と同じポケモンを選択時には処理を行わない
			if (selectedOption === null || Number(id) === selectedOption.no) return;

			setSelectedOption(selectedOption);
			fetchPokeData(selectedOption.no);
			fetchPokeSpecies(selectedOption.no);

			// paramsを付ける
			H.replace(`/pokemon/${selectedOption.no}`);
		},
		[id, setSelectedOption, fetchPokeData, fetchPokeSpecies]
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
