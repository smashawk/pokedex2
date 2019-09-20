import data from '../../data/pokemon_data.json';
import { pokeData } from '../types/type'


let normalArray:pokeData[] =[];
  
// 全ポケモンデータが入った配列をつくる（メガシンカと別フォームを除く）
const createNormalArray = () => normalArray = data.filter(value => !(value.isMegaEvolution) && !(value.form));

createNormalArray();

export default normalArray;