import React, { useEffect, useMemo, useCallback } from "react";
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
	const suggestArray = useMemo(() => createSuggestArray(), []);

	useEffect(() => {
		const { id } = props.match.params;
		const numId = Number(id);

		// 一度ポケモン検索している場合、URLにparamsを付け続ける
		if (no && Number.isNaN(numId)) {
			props.history.replace(`/pokemon/${no}`);
			return;
		}

		// URLにparamsがついている場合、検索結果を表示する
		if (!Number.isNaN(numId)) {
			decidePoke(numId, suggestArray[numId - 1]);
			fetchPokeData(numId);
			fetchPokeSpecies(numId);
		}
	}, [
		suggestArray,
		no,
		decidePoke,
		fetchPokeData,
		fetchPokeSpecies,
		props.match,
		props.history
	]);

	const searchPoke = useCallback(
		(item: OptionType): void => {
			decidePoke(item.no, item);
			fetchPokeData(item.no);
			fetchPokeSpecies(item.no);

			// paramsを付ける
			props.history.replace(`/pokemon/${item.no}`);
		},
		[decidePoke, fetchPokeData, fetchPokeSpecies, props.history]
	);

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
