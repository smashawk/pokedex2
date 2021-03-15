import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { SetPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchPartner/OutputArea";

type Props = {
	partnerInfo: SetPartnerInfoState;
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
};

const WrappedOutputArea: VFC<Props> = ({
	partnerInfo,
	pokeData,
	pokeSpecies
}) => {
	return <OutputArea {...{ partnerInfo, pokeData, pokeSpecies }} />;
};

/** container */
const mapStateToProps = (state: AppState): Props => ({
	partnerInfo: state.searchPartner.partnerInfo,
	pokeData: state.searchPartner.pokeData,
	pokeSpecies: state.searchPartner.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
