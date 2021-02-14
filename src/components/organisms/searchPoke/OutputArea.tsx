import { connect } from "react-redux";

import { DataCard } from "@components/molecules/DataCard";
import { AppState } from "@store/reducer";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({ pokeData, pokeSpecies }: Props): JSX.Element => {
	return <DataCard pokeData={pokeData} pokeSpecies={pokeSpecies} />;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchPoke.pokeData,
	pokeSpecies: state.searchPoke.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
