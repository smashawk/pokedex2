import { Dispatch } from "react";
import * as actions from "./actions";

/** searchName */
export const searchNameGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.SearchNameActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchNameFetchStarted(no));
};

/** searchType */
export const searchTypeGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.SearchTypeActionTypes>
) => (no: number): void => {
	if (!no) {
		dispatch(actions.searchTypeDataReset());
		return;
	}
	dispatch(actions.searchTypeFetchStarted(no));
};

/** searchPartner */
export const searchPartnerGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.SearchPartnerActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchPartnerFetchStarted(no));
};
