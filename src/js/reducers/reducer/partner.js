const partnerReducer = (
  state = {
    partnerNo: 0,
    inputName: '',
    isDecision: false
  },
  action
) => {

  switch (action.type) {

    case 'DECIDE_PARTNER_POKEMON':
      return {
        ...state,
        partnerNo: action.partnerNo,
        inputName: action.inputName,
        isDecision: true,
      };

    default:
      return state;
  }
};

export default partnerReducer;