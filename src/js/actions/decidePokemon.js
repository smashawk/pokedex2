export const NULL_POKEMON_NUMBER = 'NULL_FIT_POKEMON_NUMBER';
export const FIT_POKEMON_NUMBER = 'FIT_POKEMON_NUMBER';
export const NOT_FIT_POKEMON_NUMBER = 'NOT_FIT_POKEMON_NUMBER';

export const decidePokemon = (number) => {

  let type;

  if(!number) {
    type = NULL_POKEMON_NUMBER;

  } else if(number < 803 && 0 < number) {
    type = FIT_POKEMON_NUMBER;

  } else {
    type = NOT_FIT_POKEMON_NUMBER;
  }

  return {
    type,
    no: number
  }
};