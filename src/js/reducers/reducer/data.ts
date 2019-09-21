import { SHOW_POKEMON_DATA } from '../../actions/showData'
import { RESET_TYPE_LIST } from '../../actions/resetType'


type actionData = {
  type:string,
  id:number
}

const dataReducer = (
  state = {
    id: 0
  },
  action:actionData
) => {

  switch (action.type) {

    case SHOW_POKEMON_DATA:
      return {
        ...state,
        id: action.id
      };

    case RESET_TYPE_LIST:
      return {
        ...state,
        id: 0
      };

    default:
      return state;

  }

};

export default dataReducer;