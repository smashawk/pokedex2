import { VFC } from "react";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { EnhancedDataCard } from "@containers/molecules/DataCard";
import { Box } from "@material-ui/core";

type Props = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

export const OutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	return (
		<Box mt={10}>
			<EnhancedDataCard {...{ pokeData, pokeSpecies }} />
		</Box>
	);
};
