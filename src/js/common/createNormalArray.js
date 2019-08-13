import data from '../../data/pokemon_data.json';

let normalArray =[];
  
// 全ポケモンデータが入った配列をつくる（メガシンカと別フォームを除く）
const createNormalArray = () => normalArray = data.filter(value => !(value.isMegaEvolution) && !(value.form));

createNormalArray();

export default normalArray;