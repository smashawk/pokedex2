import {
	LoginState,
	LoginActionTypes,
	LOGIN
} from "@store/SearchPartner/login/types";

const initialState: LoginState = {
	isLogin: false
};

const loginReducer = (
	state = initialState,
	action: LoginActionTypes
): LoginState => {
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
