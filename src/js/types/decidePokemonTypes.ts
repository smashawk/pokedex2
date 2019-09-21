export const SEARCH_POKEMON_DATA = 'SEARCH_POKEMON_DATA'


interface DecidePokemonAction {
  type: typeof SEARCH_POKEMON_DATA
  payload:{
    no:number
    errorMessage:boolean
  }
}

export type DecidePokemonActionTypes = DecidePokemonAction;