import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { FixButton } from "@components/atoms/FixButton";

import { fetchData } from "@store/SearchPartner/decidePartner/actions";
import { DecidePartnerActionTypes } from "@store/SearchPartner/decidePartner/types";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

type DispatchProps = {
	decidePartner: typeof fetchData;
};

type Props = DispatchProps;

const InputArea = ({ decidePartner }: Props): JSX.Element => {
	// テキストフィールドのDOMを取得
	let textRef: HTMLInputElement;
	const refFnc = (element: HTMLInputElement): HTMLInputElement => {
		textRef = element;
		return textRef;
	};

	const SearchPartner = (): void => {
		decidePartner(textRef.value);
	};

	return (
		<Container>
			<Typography variant="h2">3. あなたの相棒ポケ○ン検索</Typography>
			<Typography>※フルネーム推奨ですが、何入力してもいいです</Typography>
			<TextField
				id="inputName"
				type="text"
				variant="filled"
				label="名前を入力しよう"
				inputRef={refFnc}
			/>
			<FixButton
				color="primary"
				text="決定"
				variant="contained"
				onClick={SearchPartner}
			/>
		</Container>
	);
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	decidePartner: (inputName: string): DecidePartnerActionTypes =>
		dispatch(fetchData(inputName))
});

export const InputAreaComp = connect(null, mapDispatchToProps)(InputArea);
