import { ShowDataActionTypes, SHOW_POKE_DATA } from '../../types/SearchType/showDataTypes'
import { RESET_POKE_TYPE_LIST } from '../../types/SearchType/decidePokeTypeTypes'


type initialStateTypes = {
  id:number
}

const dataReducer = (
  state:initialStateTypes = {
    id: 0
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
        id: 0
      };

    default:
      return state;

  }

};

export default dataReducer;