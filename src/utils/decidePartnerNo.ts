/**
 * 相棒ポケモンのNoを決定する
 * @param {string} inputName 入力した文字列
 * @return {number} 相棒ポケモンのNo
 */
export const decidePartnerNo = (inputName: string): number => {
	// 入力された名前を一文字ずつ配列に入れる
	const inputNameArray = inputName.split("");

	// 名前の配列をASCiiコードの配列に変換
	const charNumArray = inputNameArray.map((nameValue) =>
		nameValue.charCodeAt(0)
	);

	// 計算（配列の合計値を全ポケモンの数で割った余りをNoとする）
	const baseNo = charNumArray.reduce((acc, cur) => acc + cur);
	return baseNo % 807 ? baseNo % 807 : 807;
};
