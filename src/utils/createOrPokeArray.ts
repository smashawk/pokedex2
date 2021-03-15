import { GetPokeTypeDataType } from "@store/getPokeTypeData/reducers";

/**
 * OR検索で表示するポケモン配列を作成する
 * @param {GetPokeTypeDataType} pokeTypeData タイプstate
 * @return {getPokeTypeDataType["type1"]["pokemon"]} タイプ情報を排除したポケモン配列
 */
export const createOrPokeArray = (
	pokeTypeData: GetPokeTypeDataType
): GetPokeTypeDataType["type1"]["pokemon"] => {
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
	return sortedPokemonList.filter((pokemon) => pokemon.no);
};
