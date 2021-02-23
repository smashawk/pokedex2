import { useMemo, VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { createDescArray } from "@utils/createDescArray";
import { OutputArea } from "@components/organisms/searchType/OutputArea";

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const WrappedOutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	const DescArray = useMemo(() => createDescArray(pokeData, pokeSpecies), [
		pokeData,
		pokeSpecies
	]);

	return <OutputArea {...{ pokeData, DescArray }} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchType.pokeData,
	pokeSpecies: state.searchType.pokeSpecies
});

export const EnhancedOutputArea = connect(mapStateToProps)(WrappedOutputArea);
