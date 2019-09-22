import { decidePokeTypeActionTypes, DECIDE_POKE_TYPE, RESET_POKE_TYPE_LIST } from '../../types/SearchType/decidePokeTypeTypes'


type initialStateTypes = {
  pokeType1:string,
  pokeType2:string,
  clickMessage:boolean
}

const typeReducer = (
  state:initialStateTypes = {
    pokeType1: '-',
    pokeType2: '-',
    clickMessage: false
  },
  action:decidePokeTypeActionTypes
) => {

  switch (action.type) {

    case DECIDE_POKE_TYPE:
      return {
        ...state,
        ...action.payload
      };

    case RESET_POKE_TYPE_LIST:
      return {
        ...state,
        ...action.payload,
        pokeType1: '-',
        pokeType2: '-',
      };

    default:
      return state;

  }

};

export default typeReducer;