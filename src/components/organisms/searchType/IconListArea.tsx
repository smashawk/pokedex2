import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { PokeIconList } from "@components/atoms/PokeIconList";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { formattedPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() =>
	createStyles({
		pokeList: {
			listStyle: "none",
			display: "flex",
			flexWrap: "wrap"
		}
	})
);

type StateProps = {
	pokemon: formattedPokeTypeDataType["pokemon"];
	pokeId: number;
};

type DispatchProps = {
	showData: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const IconListArea = ({
	pokemon,
	pokeId,
	showData
}: Props): JSX.Element | null => {
	const classes = useStyles();

	const showPokeData = (
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	): void => {
		// eventTargetの型解決
		const { value } = event.target as HTMLInputElement;
		showData(Number(value));
	};
	const nodes = pokemon.map((item) => {
		return (
			<PokeIconList
				key={item.no}
				item={item}
				pokeId={pokeId}
				onClick={showPokeData}
			/>
		);
	});

	return pokemon[0].no !== 0 ? (
		<Container className={classes.pokeList}>{nodes}</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokemon: state.searchType.pokeTypeData.pokemon,
	pokeId: state.searchType.showData.pokeId
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		showData: (no: number): void => {
			searchType.showDataDispatcher(dispatch)(no);
		}
	};
};

export const IconListAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(IconListArea);
