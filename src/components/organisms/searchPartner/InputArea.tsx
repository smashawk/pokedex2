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
	setInputName: (inputName: string) => void;
	fetchPartnerPokeData: (partnerNo: number) => void;
	fetchPartnerPokeSpecies: (partnerNo: number) => void;
};

type Props = DispatchProps;

const InputArea = ({
	setInputName,
	fetchPartnerPokeData,
	fetchPartnerPokeSpecies
}: Props): JSX.Element => {
	// テキストフィールドのDOMを取得
	let textRef: HTMLInputElement;
	const refFnc = (element: HTMLInputElement): HTMLInputElement => {
		textRef = element;
		return textRef;
	};

	const SearchPartner = (): void => {
		const partnerNo = decidePartnerNo(textRef.value);
		setInputName(textRef.value);
		fetchPartnerPokeData(partnerNo);
		fetchPartnerPokeSpecies(partnerNo);
	};

	return (
		<Container>
			<Typography variant="h2">3. あなたの相棒ポケ○ン検索</Typography>
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
	const { searchPartner } = dispatches;

	return {
		setInputName: (inputName: string): void => {
			searchPartner.setInputNameDispatcher(dispatch)(inputName);
		},
		fetchPartnerPokeData: async (partnerNo: number): Promise<void> => {
			await searchPartner.searchPartnerGetPokeDataDispatcher(dispatch)(
				partnerNo
			);
		},
		fetchPartnerPokeSpecies: async (partnerNo: number): Promise<void> => {
			await searchPartner.searchPartnerGetPokeSpeciesDispatcher(dispatch)(
				partnerNo
			);
		}
	};
};

export const InputAreaComp = connect(null, mapDispatchToProps)(InputArea);
