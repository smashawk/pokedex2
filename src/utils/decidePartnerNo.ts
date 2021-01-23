export const decidePartnerNo = (inputName: string): number => {
	// 入力された名前を一文字ずつ配列に入れる
	const inputNameArray = inputName.split("");

	// 名前の配列をASCiiコードの配列に変換
	const charNumArray = inputNameArray.map((nameValue) =>
		nameValue.charCodeAt(0)
	);

	// 計算
	let partnerNo = 0;
	charNumArray.forEach((value) => {
		partnerNo += value;
		return partnerNo;
	});

	// ここで相棒ポケモン決定（全ポケモンの数で割った余り）
	partnerNo = partnerNo % 807 ? partnerNo % 807 : 1;

	return partnerNo;
};
