import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { SuggestTextField } from "@components/atoms/SuggestTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/searchPoke/decidePoke/types";
import { createSuggestArray } from "@utils/createSuggestArray";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { RouteComponentProps } from "react-router-dom";

type StateProps = {
	no: number;
	option: OptionType;
};

type DispatchProps = {
	decidePoke: (no: number, option: OptionType) => void;
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps & RouteComponentProps<{ id: string }>;

const InputArea = ({
	no,
	option,
	decidePoke,
	fetchPokeData,
	fetchPokeSpecies,
	...props
}: Props): JSX.Element => {
	// サジェスト用の配列を作る
	const suggestArray = createSuggestArray();

	useEffect(() => {
		// 第2ルーティング
		const { id } = props.match.params;
		const numId = Number(id);
		if (!Number.isNaN(numId)) {
			decidePoke(numId, suggestArray[numId - 1]);
			fetchPokeData(numId);
			fetchPokeSpecies(numId);
		}

		// ポケモン検索後、別ページに遷移 -> SearchPokeに再遷移したときにURLを保持する
		if (no) {
			props.history.push(`/pokemon/${no}`);
		}
	}, []);

	const searchPoke = (item: OptionType): void => {
		const matchPokeIndex = suggestArray.findIndex(
			(data: OptionType) => item.label === data.label
		);

		// ポケモンの名前が入力されている場合
		if (matchPokeIndex !== -1) {
			decidePoke(matchPokeIndex + 1, item);
			fetchPokeData(matchPokeIndex + 1);
			fetchPokeSpecies(matchPokeIndex + 1);

			// paramsを付ける
			props.history.push(`/pokemon/${matchPokeIndex + 1}`);
		}
	};

	return (
		<Container>
			<Typography variant="h2">1. 名前or図鑑ナンバー検索</Typography>
			<SuggestTextField
				suggestList={suggestArray}
				value={option}
				onChange={searchPoke}
			/>
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	no: state.searchPoke.decidePoke.no,
	option: state.searchPoke.decidePoke.option
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchPoke } = dispatches;

	return {
		decidePoke: (no: number, option: OptionType): void => {
			searchPoke.decidePokeDispatcher(dispatch)(no, option);
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
