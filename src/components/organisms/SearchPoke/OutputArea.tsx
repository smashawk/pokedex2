import React from "react";
import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { AppState } from "@store/reducer";

import Container from "@material-ui/core/Container";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { formattedPokeDataType } from "@store/searchPoke/getPokeData/reducers";
import { PokeSpeciesType } from "@api/requests/getPokeSpecies";

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: PokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({ pokeData, pokeSpecies }: Props): JSX.Element => {
	const dataArray = [
		{
			term: "No",
			description: pokeData.id
		},
		{
			term: "Name",
			description: pokeSpecies.names[0].name
		},
		{
			term: "Species",
			description: pokeSpecies.genera[0].genus
		},
		{
			term: "Type1",
			description: pokeData.types[0].ja
		},
		{
			term: "Type2",
			description: pokeData.types.length === 2 ? pokeData.types[1].ja : ""
		}
	];

	// 種族値の配列を作る
	const statsArray = [...Array(6).keys()].map(
		(num) => pokeData.stats[num].base_stat
	);

	return (
		<Container>
			<PokeImg no={pokeData.id} />
			<StatsRadarChart data={statsArray} />
			<DescriptionList data={dataArray} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchPoke.pokeData,
	pokeSpecies: state.searchPoke.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
