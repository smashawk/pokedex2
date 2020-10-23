import { ShowDataActionTypes, SHOW_POKE_DATA } from '@js/types/SearchType/showDataTypes'
import { RESET_POKE_TYPE_LIST } from '@js/types/SearchType/decidePokeTypeTypes'


type initialStateTypes = {
  pokeId:number
}

const dataReducer = (
  state:initialStateTypes = {
    pokeId: 0
  },
  action:ShowDataActionTypes
) => {

  switch (action.type) {

    case SHOW_POKE_DATA:
      return {
        ...state,
        ...action.payload
      };

    case RESET_POKE_TYPE_LIST:
      return {
        ...state,
        pokeId: 0
      };

    default:
      return state;

  }

};

export default dataReducer;