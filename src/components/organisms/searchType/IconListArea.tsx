import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { PokeIconList } from "@components/atoms/PokeIconList";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import {
	formattedPokeTypeDataType,
	getPokeTypeDataType
} from "@store/searchType/getPokeTypeData/reducers";

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
	switchState: boolean;
	pokeTypeData: getPokeTypeDataType;
	pokeData: formattedPokeDataType;
};

type DispatchProps = {
	fetchPokeData: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const IconListArea = ({
	switchState,
	pokeTypeData,
	pokeData,
	fetchPokeData
}: Props): JSX.Element | null => {
	const classes = useStyles();

	// React Router Hooksの定義
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const pokemon = query.get("pokemon");

		if (pokemon) {
			fetchPokeData(Number(pokemon));
		}
	}, []);

	const showPokeData = (
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	): void => {
		// eventTargetの型解決
		const { value } = event.target as HTMLInputElement;
		fetchPokeData(Number(value));

		// paramsを付ける
		H.replace(
			`/type?switch=${switchState}&type1=${pokeTypeData.type1.type}&type2=${
				pokeTypeData.type2.type
			}&pokemon=${Number(value)}`
		);
	};

	let pokemonList = [] as formattedPokeTypeDataType["pokemon"];

	// AND検索用リストを作成
	if (!switchState) {
		const matchedPokemonList = pokeTypeData.type1.pokemon.filter(
			(type1Pokemon) => {
				// タイプ2が空のときはタイプ1のリストを全て配列に入れる
				if (pokeTypeData.type2.type === "") {
					return true;
				}

				// タイプ2のポケモンがタイプ1に存在するか確認し、存在するポケモンのみ配列に入れる
				return pokeTypeData.type2.pokemon.some(
					(type2pokemon) => type2pokemon.name.ja === type1Pokemon.name.ja
				);
			}
		);

		pokemonList = matchedPokemonList.filter((pokemon) => pokemon.no);
	}

	// OR検索用リストを作成
	if (switchState) {
		const purePokemonList = [
			...pokeTypeData.type1.pokemon,
			...pokeTypeData.type2.pokemon
		];

		// 重複排除
		const excludedPokemonList = purePokemonList.filter(
			(pokemon, index, array) =>
				array.findIndex((item) => item.no === pokemon.no) === index
		);

		// 番号の昇順に整列
		const sortedPokemonList = excludedPokemonList.sort((a, b) => {
			if (a.no < b.no) return -1;
			if (a.no > b.no) return 1;
			return 0;
		});

		// 空要素排除
		pokemonList = sortedPokemonList.filter((pokemon) => pokemon.no);
	}

	const nodes = pokemonList.map((item) => {
		return (
			<PokeIconList
				key={item.no}
				item={item}
				pokeId={pokeData.id}
				onClick={showPokeData}
			/>
		);
	});

	return pokemonList.length !== 0 ? (
		<Container className={classes.pokeList}>{nodes}</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	switchState: state.searchType.switchState.switchState,
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		fetchPokeData: async (no: number): Promise<void> => {
			await searchType.getPokeDataDispatcher(dispatch)(no);
		}
	};
};

export const IconListAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(IconListArea);
