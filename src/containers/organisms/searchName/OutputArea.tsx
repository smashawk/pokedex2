import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchName/OutputArea";

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const WrappedOutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	return <OutputArea pokeData={pokeData} pokeSpecies={pokeSpecies} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchName.pokeData,
	pokeSpecies: state.searchName.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
