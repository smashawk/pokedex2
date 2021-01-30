import React from "react";
import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { AppState } from "@store/reducer";
import normalArray from "@utils/createNormalArray";

import Container from "@material-ui/core/Container";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";

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

	// 種族値の配列を作る
	const stats = [
		normalArray[no].stats.hp,
		normalArray[no].stats.attack,
		normalArray[no].stats.defence,
		normalArray[no].stats.spAttack,
		normalArray[no].stats.spDefence,
		normalArray[no].stats.speed
	];

	return (
		<Container>
			<PokeImg no={no} />
			<StatsRadarChart data={stats} />
			<DescriptionList data={data} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	no: state.searchPoke.decidePoke.no
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
