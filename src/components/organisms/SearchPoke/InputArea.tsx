import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
	SuggestTextField,
	OptionType
} from "@components/atoms/SuggestTextField";
import { dispatches } from "@store/dispatches";
import normalArray from "@utils/createNormalArray";

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

type DispatchProps = {
	decidePoke: (no: number) => void;
};

type Props = DispatchProps;

const InputArea = (props: Props): JSX.Element => {
	const classes = useStyles();

	const [isError, checkError] = React.useState(false);
	let inputValueObj;

	const searchPoke = (item: OptionType | null): void => {
		const value = item !== null ? item.label : null;
		let no = 0;

		// 何も入力されていない場合 → No.0のおばけ画像を表示
		if (!value) {
			no = 0;
			checkError(false);
			props.decidePoke(no);
			return;
		}

		const matchPokeIndex = normalArray.findIndex((data) => value === data.name);

		// ポケモンの名前が入力されている場合
		if (matchPokeIndex !== -1) {
			props.decidePoke(matchPokeIndex);
			checkError(false);
		} else {
			// 上記に当てはまらない場合
			checkError(true);
		}
	};

	const pokeNameData = [
		{ value: "フシギダネふしぎだね", label: "フシギダネ" },
		{ value: "フシギソウふしぎそう", label: "フシギソウ" },
		{ value: "フシギバナふしぎばな", label: "フシギバナ" },
		{ value: "ヒトカゲひとかげ", label: "ヒトカゲ" },
		{ value: "ゼニガメぜにがめ", label: "ゼニガメ" },
		{ value: "ピカチュウぴかちゅう", label: "ピカチュウ" },
		{ value: "ミュウツーみゅうつー", label: "ミュウツー" }
	];

	return (
		<Container>
			<Typography variant="h2">1. 名前or図鑑ナンバー検索</Typography>
			<Typography>※カタカナ名or数字1〜802まで</Typography>
			<SuggestTextField
				placeholder="ポケモンの名前を入力"
				suggestList={pokeNameData}
				value={inputValueObj}
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
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchPoke } = dispatches;

	return {
		decidePoke: (no: number): void => {
			searchPoke.decidePokeDispatcher(dispatch)(no);
		}
	};
};

export const InputAreaComp = connect(null, mapDispatchToProps)(InputArea);
