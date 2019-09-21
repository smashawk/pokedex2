import { DecidePokemonActionTypes, SEARCH_POKEMON_DATA } from '../../types/decidePokemonTypes'


type initialStateTypes = {
  no:number,
  errorMessage:boolean
}

const numberReducer = (
  state:initialStateTypes = {
    no: 0,
    errorMessage: false
  },
  action:DecidePokemonActionTypes
) => {

  switch (action.type) {

    case SEARCH_POKEMON_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;

  }

};

export default numberReducer;