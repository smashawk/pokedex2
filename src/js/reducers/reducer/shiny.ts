import { SHOW_SHINY_POKEMON } from '../../actions/showShinyPokemon'


type actionData = {
  type:string,
  shinyId:number
}

const shinyReducer = (
  state = {
    shinyId: 0,
  },
  action:actionData
) => {

  switch (action.type) {

    case SHOW_SHINY_POKEMON:
      return {
        ...state,
        shinyId: action.shinyId,
      };

    default:
      return state;

  }

};

export default shinyReducer;