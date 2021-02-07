import { OptionType } from "@store/common/setSelectedOption/reducer";

// 3つ目のタイプを選択したときに、２つ目のタイプと入れ替える(選択できるタイプは2つまで)
export const normalizeSelectedOption = (
	optionArray: OptionType[]
): OptionType[] => {
	if (optionArray.length >= 3) {
		return optionArray.filter((option, index) => index !== 1);
	}

	return optionArray;
};
