import { Dispatch } from "react";
import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { normalizePokeData } from "./normalizer";
import * as actions from "./actions";

export const searchTypeGetPokeTypeDataDispatcher = (
	dispatch: Dispatch<actions.TypeActionTypes>
) => async (optionArray: OptionType[]): Promise<void> => {
	// 1タイプ選択中の場合にtype1をfetchする
	if (optionArray.length === 1) {
		dispatch(actions.type1FetchStarted());
		await getPokeTypeData(optionArray[0].value)
			.then((res) => {
				const formattedPokeData = normalizePokeData(res.data);
				dispatch(actions.type1FetchSuccess(formattedPokeData));
			})
			.catch((e) => {
				dispatch(actions.type1FetchFailed({ error: e.response }));
			});
		return;
	}

	// 2タイプ選択中の場合にtype2をfetchする
	dispatch(actions.type2FetchStarted());
	await getPokeTypeData(
		optionArray.length === 2 ? optionArray[1].value : optionArray[2].value
	)
		.then((res) => {
			const formattedPokeData = normalizePokeData(res.data);
			dispatch(actions.type2FetchSuccess(formattedPokeData));
		})
		.catch((e) => {
			dispatch(actions.type2FetchFailed({ error: e.response }));
		});
};
