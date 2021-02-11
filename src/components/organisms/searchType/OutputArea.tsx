import React from "react";
import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { AppState } from "@store/reducer";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";

import Container from "@material-ui/core/Container";

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
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
		},
		{
			term: "Flavor",
			description: pokeSpecies.flavor_text_entries.flavor_text
		}
	];
	return (
		<Container>
			<DescriptionList data={dataArray} />
			<PokeImg no={pokeData.id} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchType.pokeData,
	pokeSpecies: state.searchType.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
