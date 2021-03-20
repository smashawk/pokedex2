import { Dispatch } from "react";
import { PartnerInfoType } from "@utils/decidePartnerInfo";
import { ActionTypes, setPartnerInfo } from "./actions";

export const setPartnerInfoDispatcher = (dispatch: Dispatch<ActionTypes>) => (
	inputName: string,
	partnerInfo: PartnerInfoType
): void => {
	dispatch(setPartnerInfo(inputName, partnerInfo));
};
