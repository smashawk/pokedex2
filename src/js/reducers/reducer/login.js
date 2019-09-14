const loginReducer = (
  state = {
    isLogin: false
  },
  action
) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        ...state,
        isLogin: true
      };

    default:
      return state;

  }

};

export default loginReducer;