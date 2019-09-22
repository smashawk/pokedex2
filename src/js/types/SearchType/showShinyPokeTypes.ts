export const SHOW_SHINY_POKE = 'SHOW_SHINY_POKE';


interface ShowShinyPokeAction {
  type: typeof SHOW_SHINY_POKE
  payload: {
    shinyId:number
  }
}

export type ShowShinyPokeActionTypes = ShowShinyPokeAction;