import { useMemo, VFC } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "@store/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { createDescArray } from "@utils/createDescArray";
import { OutputArea } from "@components/organisms/searchType/OutputArea";

export const EnhancedOutputArea: VFC = () => {
	/** state */
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchType.pokeData,
		shallowEqual
	);
	const pokeSpecies = useSelector<AppState, NormalizedPokeSpeciesType>(
		(state) => state.searchType.pokeSpecies,
		shallowEqual
	);

	const DescArray = useMemo(() => createDescArray(pokeData, pokeSpecies), [
		pokeData,
		pokeSpecies
	]);

	return <OutputArea {...{ pokeData, DescArray }} />;
};
