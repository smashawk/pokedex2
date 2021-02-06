import React from "react";
import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import { AppState } from "@store/reducer";

import Container from "@material-ui/core/Container";

type StateProps = {
	pokeData: formattedPokeDataType;
};

type Props = StateProps;

const OutputArea = ({ pokeData }: Props): JSX.Element => {
	const data = [
		{
			term: "No",
			description: pokeData.id
		},
		{
			term: "Name",
			description: pokeData.name
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
	return (
		<Container>
			<DescriptionList data={data} />
			<PokeImg no={pokeData.id} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchType.pokeData
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
