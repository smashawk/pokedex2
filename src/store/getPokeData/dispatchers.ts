import { Dispatch } from "react";
import * as actions from "./actions";

/** searchName */
export const searchNameGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchNameActionTypes>
) => (no: number): void => {
	dispatch(actions.searchNameFetchStarted(no));
};

/** searchType */
export const searchTypeGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => (no: number): void => {
	if (!no) {
		dispatch(actions.searchTypeDataReset());
		return;
	}
	dispatch(actions.searchTypeFetchStarted(no));
};

/** searchPartner */
export const searchPartnerGetPokeDataDispatcher = (
	dispatch: Dispatch<actions.searchPartnerActionTypes>
) => (no: number): void => {
	dispatch(actions.searchPartnerFetchStarted(no));
};
