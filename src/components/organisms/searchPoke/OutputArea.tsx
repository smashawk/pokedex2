import React from "react";
import { connect } from "react-redux";

import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import { DataCard } from "@components/molecules/DataCard";
import { AppState } from "@store/reducer";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: PokeSpeciesType;
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
