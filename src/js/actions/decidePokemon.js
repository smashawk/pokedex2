import normalArray from '../common/createNormalArray'

export const FIT_POKEMON_NAME = 'FIT_POKEMON_NAME';
export const NULL_POKEMON_NUMBER = 'NULL_FIT_POKEMON_NUMBER';
export const FIT_POKEMON_NUMBER = 'FIT_POKEMON_NUMBER';
export const NOT_FIT_POKEMON_NUMBER = 'NOT_FIT_POKEMON_NUMBER';

export const decidePokemon = (text) => {

  let type;
  let fitNo;

  if(!text) {
    type = NULL_POKEMON_NUMBER;
  
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