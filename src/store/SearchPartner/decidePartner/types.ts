export const FETCH_SUCCEEDED = "FETCH_SUCCEEDED";

interface FetchNijiDataAction {
	type: typeof FETCH_SUCCEEDED;
	payload: {
		inputName: string;
	};
}

export type DecidePartnerActionTypes = FetchNijiDataAction;

export type DecidePartnerState = {
	inputName: string;
	partnerNo: number;
	isDecision: boolean;
};
