import { VFC } from "react";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { DataCard } from "@components/molecules/DataCard";
import { createDescArray } from "@utils/createDescArray";

type Props = {
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
	graph?: boolean;
	simple?: boolean;
	children?: JSX.Element;
};

export const EnhancedDataCard: VFC<Props> = ({
	pokeData,
	pokeSpecies,
	graph = true,
	simple = false,
	children
}) => {
	const DescArray = createDescArray(pokeData, pokeSpecies);

	/** create base stats Array */
	const statsArray = [...Array(6).keys()].map(
		(num) => pokeData.stats[num].base_stat
	);

	return (
		<DataCard {...{ pokeData, DescArray, statsArray, graph, simple }}>
			{children}
		</DataCard>
	);
};
