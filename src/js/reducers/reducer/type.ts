interface actionData {
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

    case 'DECIDE_TYPE':
      console.log(action.typeArray)
      return {
        ...state,
        typeArray: action.typeArray,
        clickMessage: true,
      };

    case 'RESET_TYPE_LIST':
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