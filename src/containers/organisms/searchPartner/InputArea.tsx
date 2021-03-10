import { useEffect, VFC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { setPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { decidePartnerInfo, partnerInfoType } from "@utils/decidePartnerInfo";
import { InputArea } from "@components/organisms/searchPartner/InputArea";

type StateProps = {
	partnerInfoState: setPartnerInfoState;
};

type DispatchProps = {
	setPartnerInfo: (inputName: string, partnerInfo: partnerInfoType) => void;
	fetchPokeData: (partnerNo: number) => void;
	fetchPartnerPokeSpecies: (partnerNo: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedInputArea: VFC<Props> = ({
	partnerInfoState,
	setPartnerInfo,
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
		if (partnerInfoState.inputName && !name) {
			H.replace(`/partner?name=${partnerInfoState.inputName}`);
			return;
		}

		/** show search result if URL has query */
		if (name) {
			const partnerInfo = decidePartnerInfo(name);
			setPartnerInfo(name, partnerInfo);
			fetchPokeData(partnerInfo.pokeNo);
			fetchPartnerPokeSpecies(partnerInfo.pokeNo);
		}
	}, []);

	/**
	 * fire this function when you click Fix Button
	 */
	const searchPartner = (value: { inputText: string }): void => {
		if (!value.inputText) return;
		const partnerInfo = decidePartnerInfo(value.inputText);
		setPartnerInfo(value.inputText, partnerInfo);
		fetchPokeData(partnerInfo.pokeNo);
		fetchPartnerPokeSpecies(partnerInfo.pokeNo);
		H.replace(`/partner?name=${value.inputText}`);
	};

	return <InputArea {...{ searchPartner }} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	partnerInfoState: state.searchPartner.partnerInfo
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchPartner } = dispatches;

	return {
		setPartnerInfo: (inputName: string, partnerInfo: partnerInfoType): void => {
			searchPartner.setPartnerInfoDispatcher(dispatch)(inputName, partnerInfo);
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
