import React from "react";
import { AppState } from "@store/reducer";
import { connect } from "react-redux";

import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import { setInputNameState } from "@store/searchPartner/setInputName/reducer";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

import Typography from "@material-ui/core/Typography";
import { DataCard } from "@components/molecules/DataCard";

type StateProps = {
	inputName: setInputNameState;
	pokeData: formattedPokeDataType;
	pokeSpecies: PokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({
	inputName,
	pokeData,
	pokeSpecies
}: Props): JSX.Element | null => {
	return pokeData.id ? (
		<DataCard pokeData={pokeData} pokeSpecies={pokeSpecies} img="animated">
			<Typography>{`${inputName.inputName}は${pokeSpecies.names[0].name}にきめた！`}</Typography>
		</DataCard>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	inputName: state.searchPartner.inputName,
	pokeData: state.searchPartner.pokeData,
	pokeSpecies: state.searchPartner.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
