export const SHOW_SHINY_POKEMON = 'SHOW_SHINY_POKEMON';

export const showShinyPokemon = (shinyId:number) => ({
      type: SHOW_SHINY_POKEMON,
      shinyId,
});