import { VFC } from "react";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { Paper, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			width: 800,
			height: 520,
			margin: "auto",
			padding: "20px 40px",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_black.png)`,
			backgroundRepeat: "repeat"
		},
		dataContainer: {
			display: "flex"
		}
	})
);

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
	children?: JSX.Element;
};

type Props = StateProps;

export const DataCard: VFC<Props> = ({ pokeData, pokeSpecies, children }) => {
	const classes = useStyles();
	const dataArray = [
		{
			term: "No",
			description: pokeData.id
		},
		{
			term: "Name",
			description: pokeSpecies.name.ja
		},
		{
			term: "Species",
			description: pokeSpecies.genera.ja
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
			description: pokeSpecies.flavor_text_entries.ja
		}
	];

	// 種族値の配列を作る
	const statsArray = [...Array(6).keys()].map(
		(num) => pokeData.stats[num].base_stat
	);

	return (
		<Paper className={classes.paper}>
			{pokeData.name && (
				<>
					{children}
					<PokeImg no={pokeData.id} />
					<div className={classes.dataContainer}>
						<DescriptionList data={dataArray} />
						<StatsRadarChart data={statsArray} />
					</div>
				</>
			)}
		</Paper>
	);
};
