import React from "react";
import createTypeArray from "@utils/createTypeArray";
import { AppState } from "@store/reducer";
import { connect } from "react-redux";
import { PokeIconList } from "@components/atoms/PokeIconList";
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

type Props = StateProps;

const IconListArea = ({ pokeType1, pokeType2 }: Props): JSX.Element => {
	const classes = useStyles();
	// 選択されたタイプを持つポケモンの配列を作成
	const typeArray = createTypeArray(pokeType1, pokeType2);
	const nodes = typeArray.map((item: any) => {
		return <PokeIconList item={item} />;
	});

	return <ul className={classes.pokeList}>{nodes}</ul>;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeType1: state.type.pokeType1,
	pokeType2: state.type.pokeType2
});

export const IconListAreaComp = connect(mapStateToProps, null)(IconListArea);
