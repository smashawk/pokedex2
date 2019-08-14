const typeArray = (state = 0, action) => {
  switch (action.type) {
    case 'DECIDE_TYPE':
      return action.typeArray;
    default:
      return [];
  }
};

export default typeArray;