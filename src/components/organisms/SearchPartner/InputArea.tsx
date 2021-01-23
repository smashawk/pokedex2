import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { FixButton } from "@components/atoms/FixButton";
import { dispatches } from "@store/dispatches";
import { decidePartnerNo } from "@utils/decidePartnerNo";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

type DispatchProps = {
	fetchPartnerPoke: (partnerNo: number, inputName: string) => void;
};

type Props = DispatchProps;

const InputArea = ({ fetchPartnerPoke }: Props): JSX.Element => {
	// テキストフィールドのDOMを取得
	let textRef: HTMLInputElement;
	const refFnc = (element: HTMLInputElement): HTMLInputElement => {
		textRef = element;
		return textRef;
	};

	const SearchPartner = (): void => {
		const partnerNo = decidePartnerNo(textRef.value);
		fetchPartnerPoke(partnerNo, textRef.value);
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

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { PokeAPI } = dispatches;

	return {
		fetchPartnerPoke: async (
			partnerNo: number,
			inputName: string
		): Promise<void> => {
			await PokeAPI.getPokeDispatcher(dispatch)(partnerNo, inputName);
		}
	};
};

export const InputAreaComp = connect(null, mapDispatchToProps)(InputArea);
