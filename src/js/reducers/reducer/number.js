const numberReducer = (
  state = {
    no: 0,
    errorMessage: false
  },
  action
) => {

  switch (action.type) {

    case 'NULL_FIT_POKEMON_NUMBER':
      return {
        ...state,
        no: 0,
        errorMessage: false
      }

    case 'FIT_POKEMON_NUMBER':
      return {
        ...state,
        no: action.no,
        errorMessage: false
      };

    case 'NOT_FIT_POKEMON_NUMBER':
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