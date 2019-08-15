const typeReducer = (
  state = {
    typeArray: [],
    clickMessage: false
  },
  action
) => {

  switch (action.type) {

    case 'DECIDE_TYPE':
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