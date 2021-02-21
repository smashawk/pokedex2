import { useEffect, VFC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { setInputNameState } from "@store/searchPartner/setInputName/reducer";
import { decidePartnerNo } from "@utils/decidePartnerNo";
import { FixButton } from "@components/atoms/FixButton";
import { Box, Typography, TextField } from "@material-ui/core";

type StateProps = {
	inputName: setInputNameState;
};

type DispatchProps = {
	setInputName: (inputName: string) => void;
	fetchPokeData: (partnerNo: number) => void;
	fetchPartnerPokeSpecies: (partnerNo: number) => void;
};

type Props = StateProps & DispatchProps;

const InputArea: VFC<Props> = ({
	inputName,
	setInputName,
	fetchPokeData,
	fetchPartnerPokeSpecies
}) => {
	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const name = query.get("name");

		/** add Query Strings if store have searchPartner State */
		if (inputName.inputName && !name) {
			H.replace(`/partner?name=${inputName.inputName}`);
			return;
		}

		/** show search result if URL has query */
		if (name) {
			const partnerNo = decidePartnerNo(name);
			setInputName(name);
			fetchPokeData(partnerNo);
			fetchPartnerPokeSpecies(partnerNo);
		}
	}, []);

	/** get textField DOM */
	let textRef: HTMLInputElement;
	const refFnc = (element: HTMLInputElement): HTMLInputElement => {
		textRef = element;
		return textRef;
	};

	/**
	 * fire this function when you click Fix Button
	 */
	const SearchPartner = (): void => {
		const partnerNo = decidePartnerNo(textRef.value);
		setInputName(textRef.value);
		fetchPokeData(partnerNo);
		fetchPartnerPokeSpecies(partnerNo);

		H.replace(`/partner?name=${textRef.value}`);
	};

	return (
		<>
			<Typography variant="h2">3. 相棒検索</Typography>
			<Box mt={10}>
				<TextField
					size="small"
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
			</Box>
		</>
	);
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	inputName: state.searchPartner.inputName
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchPartner } = dispatches;

	return {
		setInputName: (inputName: string): void => {
			searchPartner.setInputNameDispatcher(dispatch)(inputName);
		},
		fetchPokeData: (partnerNo: number): void => {
			searchPartner.searchPartnerGetPokeDataDispatcher(dispatch)(partnerNo);
		},
		fetchPartnerPokeSpecies: (partnerNo: number): void => {
			searchPartner.searchPartnerGetPokeSpeciesDispatcher(dispatch)(partnerNo);
		}
	};
};

export const InputAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputArea);
