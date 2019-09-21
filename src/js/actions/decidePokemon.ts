import normalArray from '../common/createNormalArray'

export const FIT_POKEMON_NAME = 'FIT_POKEMON_NAME';
export const NULL_INPUT_DATA = 'NULL_INPUT_DATA';
export const FIT_POKEMON_NUMBER = 'FIT_POKEMON_NUMBER';
export const NOT_FIT_POKEMON_NUMBER = 'NOT_FIT_POKEMON_NUMBER';

export const decidePokemon = (text:any) => {

  let type;
  let fitNo;

  if(!text) {
    type = NULL_INPUT_DATA;
  
  } else if(text < 803 && 0 < text) {
    type = FIT_POKEMON_NUMBER;

  } else {
    type = NOT_FIT_POKEMON_NUMBER;
  }

  for(let i = 0; i<normalArray.length; i++) {
    if(text === normalArray[i].name) {
      type = FIT_POKEMON_NAME;
      fitNo = i;
      break;
    }
  }

  return {
    type,
    no: text,
    fitNo: fitNo ? fitNo : 0
  }
};