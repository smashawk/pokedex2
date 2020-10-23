import normalArray from '@js/common/createNormalArray'
import { DecidePokeActionTypes, SEARCH_POKE_DATA } from '@js/types/SearchPoke/decidePokeTypes'


export const decidePoke = (inputText:number | string):DecidePokeActionTypes => {

  let no;
  let errorMessage;

  // 何も入力されていない場合 → No.0のおばけ画像を表示
  if(!inputText) {
    no = 0;
    errorMessage = false;
  
  // 範囲内の数字が入力されている場合
  } else if(inputText < 803 && 0 < inputText) {
    no = inputText as number;
    errorMessage = false;

  // 範囲外の数字、及びその他無関係な文字列が入力されている場合
  } else {
    no = 0;
    errorMessage = true
  }

  // ポケモンの名前が入力されている場合
  for(let i = 0; i<normalArray.length; i++) {
    if(inputText === normalArray[i].name) {
      no = i;
      errorMessage = false;
      break;
    }
  }

  return {
    type: SEARCH_POKE_DATA,
    payload: {
      no,
      errorMessage
    }
  }

};