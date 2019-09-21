export const SHOW_POKEMON_DATA = 'SHOW_POKEMON_DATA';


export const showData = (id:number) => ({
      type: SHOW_POKEMON_DATA,
      id
});