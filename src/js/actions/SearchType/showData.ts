import { ShowDataActionTypes, SHOW_POKE_DATA } from '../../types/SearchType/showDataTypes'

export const showData = (id:number):ShowDataActionTypes => ({
  type: SHOW_POKE_DATA,
  payload: {
    id
  }
});