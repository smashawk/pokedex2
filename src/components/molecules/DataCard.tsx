import React from "react";

import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";

import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			// display: "flex"
		},
		paper: {
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_black.png)`,
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
	pokeSpecies: normalizedPokeSpeciesType;
	img?: string;
	children?: JSX.Element;
};

type Props = StateProps;

export const DataCard = ({
	pokeData,
	pokeSpecies,
	img,
	children
}: Props): JSX.Element | null => {
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
			description: pokeData.types[0].en
		},
		{
			term: "Type2",
			description: pokeData.types.length === 2 ? pokeData.types[1].en : ""
		},
		{
			term: "Flavor",
			description: pokeSpecies.flavor_text_entries.flavor_text
		}
	];

	// 種族値の配列を作る
	const statsArray = [...Array(6).keys()].map(
		(num) => pokeData.stats[num].base_stat
	);

	return pokeData.id ? (
		<Container className={classes.container}>
			<Paper className={classes.paper}>
				{children}
				<PokeImg no={pokeData.id} img={img} />
				<div className={classes.dataContainer}>
					<DescriptionList data={dataArray} />
					<StatsRadarChart data={statsArray} />
				</div>
			</Paper>
		</Container>
	) : null;
};
