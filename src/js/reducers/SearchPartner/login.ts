import { LOGIN } from '../../actions/SearchPartner/login'


type actionData = {
  type:string,
  isLogin:boolean
}

const loginReducer = (
  state = {
    isLogin: false
  },
  action:actionData
) => {

  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        isLogin: true
      };

    default:
      return state;

  }

};

export default loginReducer;