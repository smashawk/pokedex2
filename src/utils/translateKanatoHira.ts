// カタカナをひらがなに変換する
export const translateKanaToHira = (str: string): string => {
	return str.replace(/[\u30a1-\u30f6]/g, (match) => {
		const chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
};
