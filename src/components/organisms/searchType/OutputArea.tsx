import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { theme } from "@components/templates/pokedexTemplate";
import { IconListArea } from "@components/organisms/searchType/IconListArea";
import { SimpleDataCard } from "@components/molecules/SimpleDataCard";
import { createStyles, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		gridRoot: {
			marginTop: 31
		},
		iconList: {
			height: 460,
			borderRadius: 20
		},
		dataCard: {
			height: 460,
			marginLeft: theme.spacing(8)
		}
	})
);

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const WrappedOutputArea: VFC<Props> = ({ pokeData, pokeSpecies }) => {
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

	const classes = useStyles();

	return (
		<Grid container classes={{ root: classes.gridRoot }}>
			<Grid item xs classes={{ item: classes.iconList }}>
				<IconListArea />
			</Grid>
			<Grid item xs classes={{ item: classes.dataCard }}>
				<SimpleDataCard pokeData={pokeData} dataArray={dataArray} />
			</Grid>
		</Grid>
	);
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchType.pokeData,
	pokeSpecies: state.searchType.pokeSpecies
});

export const OutputArea = connect(mapStateToProps)(WrappedOutputArea);
