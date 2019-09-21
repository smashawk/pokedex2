import { DecideTypeActionTypes, DECIDE_TYPE, RESET_TYPE_LIST } from '../../types/decideTypeTypes'


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
  action:DecideTypeActionTypes
) => {

  switch (action.type) {

    case DECIDE_TYPE:
      return {
        ...state,
        ...action.payload
      };

    case RESET_TYPE_LIST:
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