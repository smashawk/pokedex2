import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { setInputNameState } from "@store/setInputName/reducer";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchPartner/OutputArea";

type StateProps = {
	inputName: setInputNameState;
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const WrappedOutputArea: VFC<Props> = ({
	inputName,
	pokeData,
	pokeSpecies
}) => {
	return <OutputArea {...{ inputName, pokeData, pokeSpecies }} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	inputName: state.searchPartner.inputName,
	pokeData: state.searchPartner.pokeData,
	pokeSpecies: state.searchPartner.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
