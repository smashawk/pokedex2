const id = (state = 0, action) => {
  switch (action.type) {
    case 'SHOW_POKEMON_DATA':
      return action.id;
    default:
      return 0;
  }
};

export default id;