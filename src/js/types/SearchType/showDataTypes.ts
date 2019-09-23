import { RESET_POKE_TYPE_LIST } from './decidePokeTypeTypes'

export const SHOW_POKE_DATA = 'SHOW_POKE_DATA';


interface ShowDataAction {
  type: typeof SHOW_POKE_DATA | typeof RESET_POKE_TYPE_LIST
  payload: {
    pokeId:number
  }
}

export type ShowDataActionTypes = ShowDataAction;