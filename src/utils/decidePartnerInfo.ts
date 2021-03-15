import { NatureList, CharacteristicList } from "@constants/variables";

export type PartnerInfoType = {
	pokeNo: number;
	natureNo: { ja: string; en: string };
	charNo: { ja: string; en: string };
};

/**
 * decide partner pokemon's Info
 * @param inputName input value
 * @return partner pokemon's Info
 */
export const decidePartnerInfo = (inputName: string): PartnerInfoType => {
	// 入力された名前を一文字ずつ配列に入れる
	const inputNameArray = inputName.split("");

	// 名前の配列をASCiiコードの配列に変換
	const charNumArray = inputNameArray.map((nameValue) =>
		nameValue.charCodeAt(0)
	);

	// 計算
	const basePokeNo = charNumArray.reduce(
		(acc, cur, index) => acc + cur * (cur + index)
	);
	const baseNatureNo = charNumArray.reduce(
		(acc, cur, index) => acc + cur * (cur + index + 1)
	);
	const baseCharNo = charNumArray.reduce(
		(acc, cur, index) => acc + cur * (cur + index + 2)
	);
	return {
		pokeNo: basePokeNo % 807 || 807,
		natureNo: NatureList[baseNatureNo % 25],
		charNo: CharacteristicList[baseCharNo % 30]
	};
};
