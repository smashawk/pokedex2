import { DECIDE_TYPE } from '../../actions/decideType'
import { RESET_TYPE_LIST } from '../../actions/resetType'


type actionData = {
  type: string,
  typeArray: [],
  clickMessage: boolean
}

const typeReducer = (
  state = {
    typeArray: [],
    clickMessage: false
  },
  action:actionData
) => {

  switch (action.type) {

    case DECIDE_TYPE:
      return {
        ...state,
        typeArray: action.typeArray,
        clickMessage: true,
      };

    case RESET_TYPE_LIST:
      return {
        ...state,
        typeArray: [],
        clickMessage: false,
      };

    default:
      return state;

  }

};

export default typeReducer;