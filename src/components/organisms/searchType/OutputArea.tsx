import { connect } from "react-redux";

import { DescriptionList } from "@components/atoms/DescriptionList";
import { PokeImg } from "@components/atoms/PokeImg";
import { AppState } from "@store/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";

import Container from "@material-ui/core/Container";

type StateProps = {
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

const OutputArea = ({ pokeData, pokeSpecies }: Props): JSX.Element => {
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
	return (
		<Container>
			<DescriptionList data={dataArray} />
			<PokeImg no={pokeData.id} />
		</Container>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeData: state.searchType.pokeData,
	pokeSpecies: state.searchType.pokeSpecies
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
