import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { DataCard } from "@components/molecules/DataCard";
import { Box } from "@material-ui/core";

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const OutputAreaComp: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	return (
		<Box mt={10}>
			<DataCard pokeData={pokeData} pokeSpecies={pokeSpecies} />
		</Box>
	);
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchName.pokeData,
	pokeSpecies: state.searchName.pokeSpecies
});

export const OutputArea = connect(mapStateToProps)(OutputAreaComp);
