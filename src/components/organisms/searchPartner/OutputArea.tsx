import { AppState } from "@store/reducer";
import { connect } from "react-redux";

import { setInputNameState } from "@store/searchPartner/setInputName/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";

import Typography from "@material-ui/core/Typography";
import { DataCard } from "@components/molecules/DataCard";

type StateProps = {
	inputName: setInputNameState;
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({
	inputName,
	pokeData,
	pokeSpecies
}: Props): JSX.Element | null => {
	return pokeData.id ? (
		<DataCard pokeData={pokeData} pokeSpecies={pokeSpecies} img="animated">
			<Typography>{`${inputName.inputName}は${pokeSpecies.name.ja}にきめた！`}</Typography>
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
