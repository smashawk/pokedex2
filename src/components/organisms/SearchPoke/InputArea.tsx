import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { InputTextField } from "@components/atoms/InputTextField";

import { AppState } from "@store/index";
import { decidePoke } from "@store/SearchPoke/decidePoke/actions";
import { DecidePokeActionTypes } from "@store/SearchPoke/decidePoke/types";
import normalArray from "@store/utils/createNormalArray";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heading2: {
			fontSize: 24,
			fontWeight: 700
		},
		text: {
			fontSize: 20
		},
		errorMessage: {
			color: theme.palette.primary.main,
			fontSize: 16
		}
	})
);

type StateProps = {
	errorMessage: boolean;
};

type DispatchProps = {
	decidePoke: typeof decidePoke;
};

type Props = StateProps & DispatchProps;

const InputArea = (props: Props): JSX.Element => {
	const classes = useStyles();

	const searchPoke = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		let no = 0;
		let errorMessage = true;

		// 何も入力されていない場合 → No.0のおばけ画像を表示
		if (!value) {
			no = 0;
			errorMessage = false;
			props.decidePoke(no, errorMessage);
			return;
		}

		// 範囲内の数字が入力されている場合
		const numValue = Number(value);
		if (numValue < 803 && numValue > 0) {
			no = numValue;
			errorMessage = false;
			props.decidePoke(no, errorMessage);
			return;
		}

		// ポケモンの名前が入力されている場合
		for (let i = 0; i < normalArray.length; i++) {
			if (value === normalArray[i].name) {
				no = i;
				errorMessage = false;
				props.decidePoke(no, errorMessage);
				break;
			}
		}

		// 上記に当てはまらない場合
		props.decidePoke(no, errorMessage);
	};

	return (
		<Container>
			<Typography className={classes.heading2} variant="h2">
				1. 名前or図鑑ナンバー検索
			</Typography>
			<Typography className={classes.text}>
				※カタカナ名or数字1〜802まで
			</Typography>
			<InputTextField
				type="text"
				label="図鑑ナンバーを入力"
				variant="standard"
				onChange={searchPoke}
			/>
			{props.errorMessage && (
				<Typography className={classes.errorMessage}>
					適切な名前or数字を入力してください。
				</Typography>
			)}
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	errorMessage: state.number.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	decidePoke: (no, errorMessage): DecidePokeActionTypes =>
		dispatch(decidePoke(no, errorMessage))
});

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
