const errorText = (state = '', action) => {
  switch (action.type) {
    case 'FIT_POKEMON_NUMBER':
      return '';
    case 'NOT_FIT_POKEMON_NUMBER':
      return '適切な数字を入力してください。';
    default:
      return state;
  }
};

export default errorText;