import { Dispatch } from "react";
import * as actions from "./actions";

/** searchName */
export const searchNameGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchNameActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchNameFetchStarted(no));
};

/** searchType */
export const searchTypeGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchTypeActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchTypeFetchStarted(no));
};

/** searchPartner */
export const searchPartnerGetPokeSpeciesDispatcher = (
	dispatch: Dispatch<actions.searchPartnerActionTypes>
) => (no: number): void => {
	if (!no) return;
	dispatch(actions.searchPartnerFetchStarted(no));
};
