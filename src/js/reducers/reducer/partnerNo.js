const partnerNo = (state = 0, action) => {
  switch (action.type) {
    case 'DECIDE_PARTNER_POKEMON':
      return action.partnerNo;
    default:
      return 0;
  }
};

export default partnerNo;