import React from "react";
import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { AppState } from "@store/reducer";
import normalArray from "@utils/createNormalArray";

import Container from "@material-ui/core/Container";

type StateProps = {
	no: number;
};

type Props = StateProps;

const OutputArea = ({ no }: Props): JSX.Element => {
	const data = [
		{
			term: "No",
			description: no
		},
		{
			term: "Name",
			description: normalArray[no].name
		},
		{
			term: "Type1",
			description: normalArray[no].types[0]
		},
		{
			term: "Type2",
			description: normalArray[no].types[1]
		}
	];

	return (
		<Container>
			<DescriptionList data={data} />
			<PokeImg no={no} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	no: state.searchPoke.decidePoke.no
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
