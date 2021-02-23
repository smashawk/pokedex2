import { useMemo, VFC } from "react";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { DataCard } from "@components/molecules/DataCard";
import { createDescArray } from "@utils/createDescArray";

type Props = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
	children?: JSX.Element;
};

export const EnhancedDataCard: VFC<Props> = ({ pokeData, pokeSpecies }) => {
	const DescArray = useMemo(() => createDescArray(pokeData, pokeSpecies), [
		pokeData,
		pokeSpecies
	]);

	/** create base stats Array */
	const statsArray = useMemo(
		() => [...Array(6).keys()].map((num) => pokeData.stats[num].base_stat),
		[pokeData]
	);

	return <DataCard {...{ pokeData, DescArray, statsArray }} />;
};
