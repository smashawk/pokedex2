import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { PokeIconList } from "@components/atoms/PokeIconList";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import createTypeArray from "@utils/createTypeArray";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pokeList: {
			listStyle: "none",
			display: "flex",
			flexWrap: "wrap"
		}
	})
);

type StateProps = {
	pokeType1: string;
	pokeType2: string;
};

type DispatchProps = {
	showData: any;
};

type Props = StateProps & DispatchProps;

const IconListArea = ({
	pokeType1,
	pokeType2,
	showData
}: Props): JSX.Element => {
	const classes = useStyles();
	// 選択されたタイプを持つポケモンの配列を作成
	const typeArray = createTypeArray(pokeType1, pokeType2);
	const showPokeData = (event: any) => {
		const { id } = event.target;
		showData(Number(id));
	};
	const nodes = typeArray.map((item: any) => {
		return (
			<PokeIconList
				key={item.number.no}
				item={item}
				onMouseOver={showPokeData}
			/>
		);
	});

	return <ul className={classes.pokeList}>{nodes}</ul>;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeType1: state.searchType.decidePokeType.pokeType1,
	pokeType2: state.searchType.decidePokeType.pokeType2
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
