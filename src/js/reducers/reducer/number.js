const number = (state = 0, action) => {
  switch (action.type) {
    case 'TRUE':
      return action.number;
    default:
      return 0;
  }
};

export default number;