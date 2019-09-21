import normalArray from '../common/createNormalArray'
import { DecidePokemonActionTypes, SEARCH_POKEMON_DATA } from '../types/decidePokemonTypes'


export const decidePokemon = (text:number | string):DecidePokemonActionTypes => {

  let no;
  let errorMessage;

  // 何も入力されていない場合 → No.0のおばけ画像を表示
  if(!text) {
    no = 0;
    errorMessage = false;
  
  // 範囲内の数字が入力されている場合
  } else if(text < 803 && 0 < text) {
    no = text as number;
    errorMessage = false;

  // 範囲外の数字、及びその他無関係な文字列が入力されている場合
  } else {
    no = 0;
    errorMessage = true
  }

  // ポケモンの名前が入力されている場合
  for(let i = 0; i<normalArray.length; i++) {
    if(text === normalArray[i].name) {
      no = i;
      errorMessage = false;
      break;
    }
  }

  return {
    type: SEARCH_POKEMON_DATA,
    payload: {
      no,
      errorMessage
    }
  }

};