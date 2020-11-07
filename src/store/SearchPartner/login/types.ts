export const LOGIN = "LOGIN";

interface LoginAction {
	type: typeof LOGIN;
}

export type LoginActionTypes = LoginAction;

export type LoginState = {
	isLogin: boolean;
};
