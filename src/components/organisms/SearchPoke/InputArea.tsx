import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { SuggestTextField } from "@components/atoms/SuggestTextField";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/searchPoke/decidePoke/types";
import normalArray from "@utils/createNormalArray";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createSuggestArray } from "@utils/createSuggestArray";
import { AppState } from "@store/reducer";

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
};

type Props = StateProps & DispatchProps;

const InputArea = ({ option, decidePoke }: Props): JSX.Element => {
	const classes = useStyles();

	const [isError, checkError] = React.useState(false);

	const searchPoke = (item: OptionType): void => {
		const value = item.label;
		let no = 0;

		// 何も入力されていない場合 → No.0のおばけ画像を表示
		if (!value) {
			no = 0;
			checkError(false);
			decidePoke(no, item);
			return;
		}

		const matchPokeIndex = normalArray.findIndex((data) => value === data.name);

		// ポケモンの名前が入力されている場合
		if (matchPokeIndex !== -1) {
			decidePoke(matchPokeIndex, item);
			checkError(false);
		} else {
			// 上記に当てはまらない場合
			checkError(true);
		}
	};

	const pokeNameData = createSuggestArray();
	return (
		<Container>
			<Typography variant="h2">1. 名前or図鑑ナンバー検索</Typography>
			<SuggestTextField
				suggestList={pokeNameData}
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
		}
	};
};

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
