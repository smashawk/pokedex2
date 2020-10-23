import { ShowShinyPokeActionTypes, SHOW_SHINY_POKE} from '@js/types/SearchType/showShinyPokeTypes'

export const showShinyPoke = (shinyId:number):ShowShinyPokeActionTypes => ({
  type: SHOW_SHINY_POKE,
  payload: {
    shinyId,
  }
});