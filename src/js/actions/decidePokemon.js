export const FIT_POKEMON_NUMBER = 'FIT_POKEMON_NUMBER';
export const NOT_FIT_POKEMON_NUMBER = 'NOT_FIT_POKEMON_NUMBER';

export const decidePokemon = (number) => ({
  type: (number < 803 && 0 < number) || number == null ? FIT_POKEMON_NUMBER : NOT_FIT_POKEMON_NUMBER,
  number,
  errorText: ''
});