import React from "react";
import { AppState } from "@store/reducer";
import { connect } from "react-redux";

import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

import Typography from "@material-ui/core/Typography";
import { DataCard } from "@components/molecules/DataCard";

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: PokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({ pokeData, pokeSpecies }: Props): JSX.Element | null => {
	return pokeData.id ? (
		<DataCard pokeData={pokeData} pokeSpecies={pokeSpecies} img="animated">
			<Typography>{`${pokeData.text}は${pokeSpecies.names[0].name}にきめた！`}</Typography>
		</DataCard>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.pokeAPI.pokeData,
	pokeSpecies: state.pokeAPI.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
