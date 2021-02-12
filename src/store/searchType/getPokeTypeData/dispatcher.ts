import { Dispatch } from "react";
import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { normalizePokeData } from "./normalizer";
import * as actions from "./actions";

export const searchTypeGetPokeTypeDataDispatcher = (
	dispatch: Dispatch<actions.TypeActionTypes>
) => async (
	selectedOptionArray: OptionType[],
	optionArray: OptionType[]
): Promise<void> => {
	// 2タイプ -> 0タイプの場合にtype1、2をリセットする
	if (selectedOptionArray.length === 0 && optionArray.length === 2) {
		dispatch(actions.resetType1());
		dispatch(actions.resetType2());
		return;
	}

	// 1タイプ -> 0タイプの場合にtype1をリセットする
	if (selectedOptionArray.length === 0 && optionArray.length === 1) {
		dispatch(actions.resetType1());
		return;
	}

	// 0タイプ -> 1タイプの場合、及び2タイプ選択のリロード時にtype1をfetchする
	if (
		selectedOptionArray.length === 1 ||
		(selectedOptionArray.length === 2 && optionArray.length === 1)
	) {
		dispatch(actions.type1FetchStarted());
		await getPokeTypeData(selectedOptionArray[0].value)
			.then((res) => {
				const formattedPokeData = normalizePokeData(res.data);
				dispatch(actions.type1FetchSuccess(formattedPokeData));
			})
			.catch((e) => {
				dispatch(actions.type1FetchFailed({ error: e.response }));
			});
	}

	// 2タイプ -> 1タイプの場合にtype1をリセットする
	if (selectedOptionArray.length === 1 && optionArray.length && 2) {
		dispatch(actions.resetType2());
		return;
	}

	// 1タイプ -> 2タイプにtype1をfetchする
	if (selectedOptionArray.length === 2 || selectedOptionArray.length === 3) {
		dispatch(actions.type2FetchStarted());
		await getPokeTypeData(
			selectedOptionArray.length === 2
				? selectedOptionArray[1].value
				: selectedOptionArray[2].value
		)
			.then((res) => {
				const formattedPokeData = normalizePokeData(res.data);
				dispatch(actions.type2FetchSuccess(formattedPokeData));
			})
			.catch((e) => {
				dispatch(actions.type2FetchFailed({ error: e.response }));
			});
	}
};
