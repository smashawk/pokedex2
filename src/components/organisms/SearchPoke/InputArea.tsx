import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { SuggestTextField } from "@components/atoms/SuggestTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/searchPoke/decidePoke/types";
import { createSuggestArray } from "@utils/createSuggestArray";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		errorMessage: {
			color: theme.palette.primary.main,
			fontSize: 16
		}
	})
);

type StateProps = {
	option: OptionType;
};

type DispatchProps = {
	decidePoke: (no: number, option: OptionType) => void;
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const InputArea = ({
	option,
	decidePoke,
	fetchPokeData,
	fetchPokeSpecies
}: Props): JSX.Element => {
	const classes = useStyles();

	const suggestArray = createSuggestArray();
	const [isError, checkError] = React.useState(false);

	const searchPoke = (item: OptionType): void => {
		const value = item.label;

		const matchPokeIndex = suggestArray.findIndex(
			(data: OptionType) => value === data.label
		);

		// ポケモンの名前が入力されている場合
		if (matchPokeIndex !== -1) {
			decidePoke(matchPokeIndex, item);
			fetchPokeData(matchPokeIndex + 1);
			fetchPokeSpecies(matchPokeIndex + 1);
			checkError(false);
		} else {
			// 上記に当てはまらない場合
			checkError(true);
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
			{isError && (
				<Typography className={classes.errorMessage}>
					適切な名前or数字を入力してください。
				</Typography>
			)}
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
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
