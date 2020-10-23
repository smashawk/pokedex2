import { DecidePokeActionTypes, SEARCH_POKE_DATA } from '@js/types/SearchPoke/decidePokeTypes'


type initialStateTypes = {
  no:number,
  errorMessage:boolean
}

const numberReducer = (
  state:initialStateTypes = {
    no: 0,
    errorMessage: false
  },
  action:DecidePokeActionTypes
) => {

  switch (action.type) {

    case SEARCH_POKE_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;

  }

};

export default numberReducer;