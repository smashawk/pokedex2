import { ShowShinyPokeActionTypes, SHOW_SHINY_POKE} from '@js/types/SearchType/showShinyPokeTypes'


type initialStateTypes = {
  shinyId:number
}

const shinyReducer = (
  state:initialStateTypes = {
    shinyId: 0,
  },
  action:ShowShinyPokeActionTypes
) => {

  switch (action.type) {

    case SHOW_SHINY_POKE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;

  }

};

export default shinyReducer;