const errorText = (state = '', action) => {
  switch (action.type) {
    case 'TRUE':
      return '';
    case 'FALSE':
      return '適切な数字を入力してください。';
    default:
      return state;
  }
};

export default errorText;