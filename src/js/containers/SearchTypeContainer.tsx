import { connect } from "react-redux";
import {
	decidePokeType1,
	decidePokeType2,
	resetType
} from "@js/actions/SearchType/decidePokeType";
import { showData } from "@js/actions/SearchType/showData";
import { showShinyPoke } from "@js/actions/SearchType/showShinyPoke";
import { AppState } from "@js/reducers/index";
import { Dispatch } from "redux";
import { decidePokeTypeActionTypes } from "@js/types/SearchType/decidePokeTypeTypes";
import { ShowDataActionTypes } from "@js/types/SearchType/showDataTypes";
import { ShowShinyPokeActionTypes } from "@js/types/SearchType/showShinyPokeTypes";
import SearchTypeComponent from "../../components/pages/SearchType";

const mapStateToProps = (state: AppState) => ({
	pokeType1: state.type.pokeType1,
	pokeType2: state.type.pokeType2,
	clickMessage: state.type.clickMessage,
	pokeId: state.data.pokeId,
	shinyId: state.shiny.shinyId
});

const mapDispatchToProps = (
	dispatch: Dispatch<
		decidePokeTypeActionTypes | ShowDataActionTypes | ShowShinyPokeActionTypes
	>
) => ({
	decidePokeType1: (value: string) => dispatch(decidePokeType1(value)),
	decidePokeType2: (value: string) => dispatch(decidePokeType2(value)),
	resetType: () => dispatch(resetType()),
	showData: (pokeId: number) => dispatch(showData(pokeId)),
	showShinyPoke: (shinyId: number) => dispatch(showShinyPoke(shinyId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchTypeComponent);
