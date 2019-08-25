const shinyReducer = (
  state = {
    shinyId: 0,
  },
  action
) => {

  switch (action.type) {

    case 'SHOW_SHINY_POKEMON':
      return {
        ...state,
        shinyId: action.shinyId,
      };

    default:
      return state;

  }

};

export default shinyReducer;