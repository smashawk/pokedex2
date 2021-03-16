import { VFC } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "@store/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchName/OutputArea";

export const EnhancedOutputArea: VFC = () => {
	/** state */
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchName.pokeData,
		shallowEqual
	);
	const pokeSpecies = useSelector<AppState, NormalizedPokeSpeciesType>(
		(state) => state.searchName.pokeSpecies,
		shallowEqual
	);

	return <OutputArea pokeData={pokeData} pokeSpecies={pokeSpecies} />;
};
