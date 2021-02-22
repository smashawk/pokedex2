import { useEffect, VFC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { setInputNameState } from "@store/searchPartner/setInputName/reducer";
import { decidePartnerNo } from "@utils/decidePartnerNo";
import { InputArea } from "@components/organisms/searchPartner/InputArea";

type StateProps = {
	inputName: setInputNameState;
};

type DispatchProps = {
	setInputName: (inputName: string) => void;
	fetchPokeData: (partnerNo: number) => void;
	fetchPartnerPokeSpecies: (partnerNo: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedInputArea: VFC<Props> = ({
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
	const searchPartner = (): void => {
		const partnerNo = decidePartnerNo(textRef.value);
		setInputName(textRef.value);
		fetchPokeData(partnerNo);
		fetchPartnerPokeSpecies(partnerNo);

		H.replace(`/partner?name=${textRef.value}`);
	};

	return <InputArea {...{ refFnc, searchPartner }} />;
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

export const EnhancedInputArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedInputArea);
