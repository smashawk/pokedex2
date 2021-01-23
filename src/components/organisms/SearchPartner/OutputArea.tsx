import React from "react";
import { AppState } from "@store/reducer";
import { connect } from "react-redux";

import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

type StateProps = {
	pokeData: formattedPokeDataType;
};

type Props = StateProps;

const OutputArea = ({ pokeData }: Props): JSX.Element | null => {
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
			description: pokeData.types[0].type.name
		},
		{
			term: "Type2",
			description:
				pokeData.types.length === 2 ? pokeData.types[1].type.name : ""
		}
	];

	return pokeData.id ? (
		<Container>
			<Typography>
				{`${pokeData.inputName}は${pokeData.name}にきめた！`}
			</Typography>
			<DescriptionList data={data} />
			<PokeImg no={pokeData.id} img="animated" />
		</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.pokeAPI.pokeData
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
