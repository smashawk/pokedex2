const number = (state = 0, action) => {
  switch (action.type) {
    case 'FIT_POKEMON_NUMBER':
      return action.number;
    default:
      return 0;
  }
};

export default number;