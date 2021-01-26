import React from "react";
import { AppState } from "@store/reducer";
import { connect } from "react-redux";

import { PokeSpeciesType } from "@api/requests/getPokeSpecies";
import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			// display: "flex"
		},
		paper: {
			backgroundImage: "url(./images/bg_black.png)",
			backgroundRepeat: "repeat",
			margin: "auto",
			padding: "20px 100px",
			width: 800
		},
		dataContainer: {
			display: "flex"
		}
	})
);

type StateProps = {
	pokeData: formattedPokeDataType;
	pokeSpecies: PokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({ pokeData, pokeSpecies }: Props): JSX.Element | null => {
	const classes = useStyles();
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

	return pokeData.id ? (
		<Container className={classes.container}>
			<Typography>{`${pokeData.text}は${pokeSpecies.names[0].name}にきめた！`}</Typography>
			<Paper className={classes.paper}>
				<PokeImg no={pokeData.id} img="animated" />
				<div className={classes.dataContainer}>
					<DescriptionList data={dataArray} />
					<StatsRadarChart data={statsArray} />
				</div>
			</Paper>
		</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.pokeAPI.pokeData,
	pokeSpecies: state.pokeAPI.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
