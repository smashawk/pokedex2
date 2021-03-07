import { Dispatch } from "react";
import { partnerInfoType } from "@utils/decidePartnerInfo";
import { ActionTypes, setPartnerInfo } from "./actions";

export const setPartnerInfoDispatcher = (dispatch: Dispatch<ActionTypes>) => (
	inputName: string,
	partnerInfo: partnerInfoType
): void => {
	dispatch(setPartnerInfo(inputName, partnerInfo));
};
