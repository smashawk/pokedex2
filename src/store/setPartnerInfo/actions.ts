import { partnerInfoType } from "@utils/decidePartnerInfo";
import * as types from "./types";

export const setPartnerInfo = (
	inputName: string,
	partnerInfo: partnerInfoType
) =>
	({
		type: types.SET_INPUT_NAME,
		payload: {
			inputName,
			...partnerInfo
		}
	} as const);

export type ActionTypes = ReturnType<typeof setPartnerInfo>;
