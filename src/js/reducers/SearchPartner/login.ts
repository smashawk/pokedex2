import { LoginActionTypes, LOGIN } from '../../types/SearchPartner/loginTypes'


type initialStateTypes = {
  isLogin:boolean
}

const loginReducer = (
  state:initialStateTypes = {
    isLogin: false
  },
  action:LoginActionTypes
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