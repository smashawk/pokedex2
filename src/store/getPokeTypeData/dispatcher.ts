import { Dispatch } from "react";
import { OptionType } from "@store/setSelectedOption/reducer";
import * as actions from "./actions";

export const searchTypeGetPokeTypeDataDispatcher = (
	dispatch: Dispatch<actions.TypeActionTypes>
) => (selectedOptionArray: OptionType[], optionArray: OptionType[]): void => {
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
		dispatch(actions.type1FetchStarted(selectedOptionArray[0].value as string));
	}

	// 2タイプ -> 1タイプの場合にtype1をリセットする
	if (selectedOptionArray.length === 1 && optionArray.length && 2) {
		dispatch(actions.resetType2());
		return;
	}

	// 1タイプ -> 2タイプにtype2をfetchする
	if (selectedOptionArray.length === 2 || selectedOptionArray.length === 3) {
		dispatch(
			actions.type2FetchStarted(
				selectedOptionArray.length === 2
					? (selectedOptionArray[1].value as string)
					: (selectedOptionArray[2].value as string)
			)
		);
	}
};
