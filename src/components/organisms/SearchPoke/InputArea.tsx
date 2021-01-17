import React from "react";
import { connect } from "react-redux";
import { AppState } from "@store/index";
import { Dispatch } from "redux";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { InputTextField } from "@components/atoms/InputTextField";
import { decidePoke } from "@store/SearchPoke/decidePoke/actions";
import normalArray from "@store/utils/createNormalArray";
import { DecidePokeActionTypes } from "@store/SearchPoke/decidePoke/types";

const InputAreaWrap = styled.div``;

const InputAreaDesc = styled(styles.BaseInputAreaDesc)``;

const InputAreaErrorText = styled(styles.BaseInputAreaErrorText)``;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(1),
				width: "25ch"
			}
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
		let errorMessage = false;

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

		// 範囲外の数字、及びその他無関係な文字列が入力されている場合
		if (numValue >= 803 && numValue < 0) {
			no = 0;
			errorMessage = true;
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
	};

	return (
		<InputAreaWrap className={classes.root}>
			<h2>1. 名前or図鑑ナンバー検索</h2>
			<InputAreaDesc>※カタカナ名or数字1〜802まで</InputAreaDesc>
			<InputTextField
				type="text"
				label="図鑑ナンバーを入力"
				variant="standard"
				onChange={searchPoke}
			/>
			{props.errorMessage && (
				<InputAreaErrorText>
					適切な名前or数字を入力してください。
				</InputAreaErrorText>
			)}
		</InputAreaWrap>
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
