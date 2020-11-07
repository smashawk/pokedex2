import {
	LoginState,
	LoginActionTypes,
	LOGIN
} from "@js/types/SearchPartner/loginTypes";

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
