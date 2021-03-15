import { useMemo, VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { createDescArray } from "@utils/createDescArray";
import { OutputArea } from "@components/organisms/searchType/OutputArea";

type Props = {
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
};

const WrappedOutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	const DescArray = useMemo(() => createDescArray(pokeData, pokeSpecies), [
		pokeData,
		pokeSpecies
	]);

	return <OutputArea {...{ pokeData, DescArray }} />;
};

/** container */
const mapStateToProps = (state: AppState): Props => ({
	pokeData: state.searchType.pokeData,
	pokeSpecies: state.searchType.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
