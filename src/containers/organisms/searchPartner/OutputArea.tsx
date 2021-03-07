import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { setPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchPartner/OutputArea";

type StateProps = {
	partnerInfo: setPartnerInfoState;
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const WrappedOutputArea: VFC<Props> = ({
	partnerInfo,
	pokeData,
	pokeSpecies
}) => {
	return <OutputArea {...{ partnerInfo, pokeData, pokeSpecies }} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	partnerInfo: state.searchPartner.partnerInfo,
	pokeData: state.searchPartner.pokeData,
	pokeSpecies: state.searchPartner.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
