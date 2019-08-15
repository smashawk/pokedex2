const dataReducer = (
  state = {
    id: 0
  },
  action
) => {

  switch (action.type) {

    case 'SHOW_POKEMON_DATA':
      return {
        ...state,
        id: action.id
      };

    case 'RESET_TYPE_LIST':
      return {
        ...state,
        id: 0
      };

    default:
      return state;

  }

};

export default dataReducer;