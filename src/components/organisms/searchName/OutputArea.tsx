import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { DataCard } from "@components/molecules/DataCard";

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const OutputAreaComp: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	return <DataCard pokeData={pokeData} pokeSpecies={pokeSpecies} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchName.pokeData,
	pokeSpecies: state.searchName.pokeSpecies
});

export const OutputArea = connect(mapStateToProps)(OutputAreaComp);
