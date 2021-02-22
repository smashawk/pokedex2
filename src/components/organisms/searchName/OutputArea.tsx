import { VFC } from "react";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { DataCard } from "@components/molecules/DataCard";
import { Box } from "@material-ui/core";

type Props = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

export const OutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	return (
		<Box mt={10}>
			<DataCard {...{ pokeData, pokeSpecies }} />
		</Box>
	);
};
