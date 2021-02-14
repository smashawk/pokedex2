import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { FixButton } from "@components/atoms/FixButton";
import { dispatches } from "@store/dispatches";
import { setInputNameState } from "@store/searchPartner/setInputName/reducer";
import { decidePartnerNo } from "@utils/decidePartnerNo";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";

type StateProps = {
	inputName: setInputNameState;
};

type DispatchProps = {
	setInputName: (inputName: string) => void;
	fetchPartnerPokeData: (partnerNo: number) => void;
	fetchPartnerPokeSpecies: (partnerNo: number) => void;
};

type Props = StateProps & DispatchProps;

const InputArea = ({
	inputName,
	setInputName,
	fetchPartnerPokeData,
	fetchPartnerPokeSpecies
}: Props): JSX.Element => {
	// React Router Hooksの定義
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	// 一度何か操作していた場合、URLにQuery Stringsを付け続ける
	useEffect(() => {
		const name = query.get("name");

		if (setInputName && !name) {
			H.replace(`/partner?name=${inputName.inputName}`);
			return;
		}

		// URLにparamsがついている場合、検索結果を表示する
		if (name) {
			const partnerNo = decidePartnerNo(name);
			setInputName(name);
			fetchPartnerPokeData(partnerNo);
			fetchPartnerPokeSpecies(partnerNo);
		}
	}, []);

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

		// paramsを付ける
		H.replace(`/partner?name=${textRef.value}`);
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

// container
const mapStateToProps = (state: AppState): StateProps => ({
	inputName: state.searchPartner.inputName
});

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

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
