import {
	DecidePartnerActionTypes,
	FETCH_SUCCEEDED
} from "@store/SearchPartner/decidePartner/types";

export const fetchData = (inputName: string): DecidePartnerActionTypes => ({
	type: FETCH_SUCCEEDED,
	payload: {
		inputName
	}
});
