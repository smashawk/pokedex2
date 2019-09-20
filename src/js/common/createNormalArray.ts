import data from '../../data/pokemon_data.json';

interface PokeData {
  "no": number,
  "name": string,
  "form": string,
  "isMegaEvolution": boolean,
  "evolutions": number[],
  "types": string[],
  "abilities": string[],
  "hiddenAbilities": string[],
  "stats": {
    "hp": number,
    "attack": number,
    "defence": number,
    "spAttack": number,
    "spDefence": number,
    "speed": number
  }
}


let normalArray:PokeData[] =[];
  
// 全ポケモンデータが入った配列をつくる（メガシンカと別フォームを除く）
const createNormalArray = () => normalArray = data.filter(value => !(value.isMegaEvolution) && !(value.form));

createNormalArray();

export default normalArray;