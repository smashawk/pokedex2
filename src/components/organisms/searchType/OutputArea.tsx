import React from "react";
import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { AppState } from "@store/reducer";
import normalArray from "@utils/createNormalArray";

import Container from "@material-ui/core/Container";

type StateProps = {
	pokeId: number;
};

type Props = StateProps;

const OutputArea = ({ pokeId }: Props): JSX.Element => {
	const data = [
		{
			term: "No",
			description: pokeId
		},
		{
			term: "Name",
			description: normalArray[pokeId].name
		},
		{
			term: "Type1",
			description: normalArray[pokeId].types[0]
		},
		{
			term: "Type2",
			description:
				normalArray[pokeId].types.length === 2
					? normalArray[pokeId].types[1]
					: ""
		}
	];
	return (
		<Container>
			<DescriptionList data={data} />
			<PokeImg no={pokeId} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeId: state.searchType.showData.pokeId
});

export const OutputAreaComp = connect(mapStateToProps, null)(OutputArea);
