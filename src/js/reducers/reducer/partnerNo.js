const partnerNo = (state = 0, action) => {
  switch (action.type) {
    case 'PARTNER':
      return action.partnerNo;
    default:
      return 0;
  }
};

export default partnerNo;