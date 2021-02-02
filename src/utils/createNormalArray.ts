import data from "@data/pokemon_data.json";
import { pokeData } from "@store/types/commonTypes";

// eslint-disable-next-line import/no-mutable-exports
let normalArray = [] as pokeData[];

// 全ポケモンデータが入った配列をつくる（メガシンカと別フォームを除く）
// eslint-disable-next-line no-return-assign
const createNormalArray = () =>
	(normalArray = data.filter((value) => !value.isMegaEvolution && !value.form));

createNormalArray();

export default normalArray;
