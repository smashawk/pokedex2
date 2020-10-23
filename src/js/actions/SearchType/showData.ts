import { ShowDataActionTypes, SHOW_POKE_DATA } from '@js/types/SearchType/showDataTypes'

export const showData = (pokeId:number):ShowDataActionTypes => ({
  type: SHOW_POKE_DATA,
  payload: {
    pokeId
  }
});