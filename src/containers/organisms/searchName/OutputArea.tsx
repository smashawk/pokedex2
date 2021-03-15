import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchName/OutputArea";

type Props = {
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
};

const WrappedOutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	return <OutputArea pokeData={pokeData} pokeSpecies={pokeSpecies} />;
};

/** container */
const mapStateToProps = (state: AppState): Props => ({
	pokeData: state.searchName.pokeData,
	pokeSpecies: state.searchName.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
