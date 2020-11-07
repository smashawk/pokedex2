import {
	DecidePartnerState,
	DecidePartnerActionTypes,
	FETCH_SUCCEEDED,
	FETCH_FAILED
} from "@store/SearchPartner/decidePartner/types";
import decidePartnerNo from "@store/utils/decidePartnerNo";

const initialState: DecidePartnerState = {
	inputName: "",
	nijiData: "",
	partnerNo: 0,
	isDecision: false
};

const nijiDataReducer = (
	state = initialState,
	action: DecidePartnerActionTypes
): DecidePartnerState => {
	switch (action.type) {
		case FETCH_SUCCEEDED:
			// 相棒ポケモンを決定する
			const partnerNo = decidePartnerNo(action.payload.inputName);

			return {
				...state,
				...action.payload,
				partnerNo,
				isDecision: true
			};

		case FETCH_FAILED:
			return {
				...state
			};

		default:
			return state;
	}
};

export default nijiDataReducer;
