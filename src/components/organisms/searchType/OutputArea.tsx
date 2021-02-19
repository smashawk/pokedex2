import { VFC } from "react";
import { connect } from "react-redux";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { theme } from "@components/templates/pokedexTemplate";
import { IconListArea } from "@components/organisms/searchType/IconListArea";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { createStyles, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		gridRoot: {
			marginTop: theme.spacing(10)
		}
	})
);

type StateProps = {
	optionArray: { option: OptionType[] };
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const WrappedOutputArea: VFC<Props> = ({
	optionArray,
	pokeData,
	pokeSpecies
}) => {
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
		<Grid container spacing={2} classes={{ root: classes.gridRoot }}>
			{optionArray.option.length ? (
				<Grid item xs={6}>
					<IconListArea />
				</Grid>
			) : null}
			{optionArray.option.length && pokeData.name ? (
				<>
					<Grid item xs={6}>
						<PokeImg no={pokeData.id} />
						<DescriptionList data={dataArray} />
					</Grid>
				</>
			) : null}
		</Grid>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	optionArray: state.searchType.selectedOption,
	pokeData: state.searchType.pokeData,
	pokeSpecies: state.searchType.pokeSpecies
});

export const OutputArea = connect(mapStateToProps)(WrappedOutputArea);
