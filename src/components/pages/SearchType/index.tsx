import React from "react";
import { connect } from "react-redux";
import { AppState } from "@js/reducers/index";
import { Dispatch } from "redux";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import {
	decidePokeType1,
	decidePokeType2,
	resetType
} from "@js/actions/SearchType/decidePokeType";
import { showData } from "@js/actions/SearchType/showData";
import { showShinyPoke } from "@js/actions/SearchType/showShinyPoke";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import IconListArea from "./IconListArea";

type StateProps = {
	pokeType1: string;
	pokeType2: string;
	clickMessage: boolean;
	pokeId: number;
	shinyId: number;
};

type DispatchProps = {
	decidePokeType1: typeof decidePokeType1;
	decidePokeType2: typeof decidePokeType2;
	resetType: typeof resetType;
	showData: typeof showData;
	showShinyPoke: typeof showShinyPoke;
};

type Props = StateProps & DispatchProps;

const ContentArea = styled(styles.BaseContentArea)`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const SearchType = (props: Props): JSX.Element => {
	return (
		<ContentArea>
			<InputArea
				decidePokeType1={props.decidePokeType1}
				decidePokeType2={props.decidePokeType2}
				resetType={props.resetType}
			/>

			<OutputArea pokeId={props.pokeId} shinyId={props.shinyId} />

			<IconListArea
				pokeType1={props.pokeType1}
				pokeType2={props.pokeType2}
				showData={props.showData}
				showShinyPoke={props.showShinyPoke}
				clickMessage={props.clickMessage}
				pokeId={props.pokeId}
			/>
		</ContentArea>
	);
};

const mapStateToProps = (state: AppState): StateProps => ({
	pokeType1: state.type.pokeType1,
	pokeType2: state.type.pokeType2,
	clickMessage: state.type.clickMessage,
	pokeId: state.data.pokeId,
	shinyId: state.shiny.shinyId
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	decidePokeType1: (value: string) => dispatch(decidePokeType1(value)),
	decidePokeType2: (value: string) => dispatch(decidePokeType2(value)),
	resetType: () => dispatch(resetType()),
	showData: (pokeId: number) => dispatch(showData(pokeId)),
	showShinyPoke: (shinyId: number) => dispatch(showShinyPoke(shinyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchType);
