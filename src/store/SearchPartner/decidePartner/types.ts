import { userInfo } from "@js/types/commonTypes";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCEEDED = "FETCH_SUCCEEDED";
export const FETCH_FAILED = "FETCH_FAILED";

interface FetchNijiDataAction {
	// NIJIBOX_社員APIを使用する場合はFETCH_DATAのみ
	// type: typeof FETCH_DATA
	type: typeof FETCH_DATA | typeof FETCH_SUCCEEDED;
	payload: {
		inputName: string;
	};
}

interface DecidePartnerAction {
	type: typeof FETCH_SUCCEEDED | typeof FETCH_FAILED;
	payload: {
		inputName: string;
		nijiData: userInfo;
	};
}

export type DecidePartnerActionTypes =
	| FetchNijiDataAction
	| DecidePartnerAction;

export type DecidePartnerState = {
	inputName: string;
	nijiData: any;
	partnerNo: number;
	isDecision: boolean;
};
