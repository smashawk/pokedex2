import { ShowDataActionTypes, SHOW_POKE_DATA } from '../../types/SearchType/showDataTypes'

export const showData = (pokeId:number):ShowDataActionTypes => ({
  type: SHOW_POKE_DATA,
  payload: {
    pokeId
  }
});