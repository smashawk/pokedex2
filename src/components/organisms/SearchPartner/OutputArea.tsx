import React from "react";
import { AppState } from "@store/reducer";
import { connect } from "react-redux";

import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { PokeSpeciesType } from "@api/requests/getPokeSpecies";

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: PokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({ pokeData, pokeSpecies }: Props): JSX.Element | null => {
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
			term: "Type1",
			description: pokeData.types[0].type.name
		},
		{
			term: "Type2",
			description:
				pokeData.types.length === 2 ? pokeData.types[1].type.name : ""
		}
	];

	// 種族値の配列を作る
	const statsArray = [...Array(6).keys()].map(
		(num) => pokeData.stats[num].base_stat
	);

	return pokeData.id ? (
		<Container>
			<PokeImg no={pokeData.id} img="animated" />
			<StatsRadarChart data={statsArray} />
			<Typography>{`${pokeData.text}は${pokeSpecies.names[0].name}にきめた！`}</Typography>
			<DescriptionList data={dataArray} />
		</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.pokeAPI.pokeData,
	pokeSpecies: state.pokeAPI.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
