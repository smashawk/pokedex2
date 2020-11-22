import React from "react";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { decidePoke } from "@store/SearchPoke/decidePoke/actions";

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
	return (
		<InputAreaWrap className={classes.root}>
			<h2>1. 名前or図鑑ナンバー検索</h2>
			<InputAreaDesc>※カタカナ名or数字1〜802まで</InputAreaDesc>
			<TextField
				// className={classes.input}
				id="inputText"
				type="number"
				// type="text"
				onChange={(e) => props.decidePoke(e.target.value)}
				label="図鑑ナンバーを入力"
				variant="standard"
			/>
			{props.errorMessage && (
				<InputAreaErrorText>
					適切な名前or数字を入力してください。
				</InputAreaErrorText>
			)}
		</InputAreaWrap>
	);
};

export default InputArea;
