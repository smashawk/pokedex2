import { getPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";

/**
 * AND検索で表示するポケモン配列を作成する
 * @param {getPokeTypeDataType} pokeTypeData タイプAPIで取得した配列
 * @return {getPokeTypeDataType["type1"]["pokemon"]} タイプ情報を排除したポケモン配列
 */
export const createAndPokeArray = (
	pokeTypeData: getPokeTypeDataType
): getPokeTypeDataType["type1"]["pokemon"] => {
	return pokeTypeData.type1.pokemon.filter((type1Pokemon) => {
		// タイプ2が空のときはタイプ1のリストを全て配列に入れる、
		// タイプ2のポケモンがタイプ1に存在するか確認し、存在するポケモンのみ配列に入れる
		return pokeTypeData.type1.type !== "" && pokeTypeData.type2.type === ""
			? true
			: pokeTypeData.type2.pokemon.some(
					(type2pokemon) => type2pokemon.name.ja === type1Pokemon.name.ja
			  );
	});
};
