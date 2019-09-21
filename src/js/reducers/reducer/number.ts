import { FIT_POKEMON_NAME, NULL_INPUT_DATA, FIT_POKEMON_NUMBER, NOT_FIT_POKEMON_NUMBER } from '../../actions/decidePokemon'


type actionData = {
  type: string,
  no: number,
  fitNo: number,
  errorMessage: boolean
}

const numberReducer = (
  state = {
    no: 0,
    errorMessage: false
  },
  action:actionData
) => {

  switch (action.type) {

    case FIT_POKEMON_NAME:
      return {
        ...state,
        no: action.fitNo,
        errorMessage: false
      }

    case NULL_INPUT_DATA:
      return {
        ...state,
        no: 0,
        errorMessage: false
      }

    case FIT_POKEMON_NUMBER:
      return {
        ...state,
        no: action.no,
        errorMessage: false
      };

    case NOT_FIT_POKEMON_NUMBER:
      return {
        ...state,
        no: 0,
        errorMessage: true
      }

    default:
      return state;

  }

};

export default numberReducer;