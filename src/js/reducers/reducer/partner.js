const partnerReducer = (
  state = {
    partnerNo: 0
  },
  action
) => {
  
  switch (action.type) {

    case 'DECIDE_PARTNER_POKEMON':
      return {
        ...state,
        partnerNo: action.partnerNo,
      };

    default:
      return state;
  }
};

export default partnerReducer;