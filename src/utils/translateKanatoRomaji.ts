// 参考 https://shanabrian.com/web/javascript/kana-to-roman.php

/**
 * ひらがなまたはカタカナからローマ字へ変換
 * @param {string} targetStr ローマ字へ変換する文字列（変換元の文字列）
 * @param {"hepburn"|"kunrei"} [type="hepburn"] ローマ字の種類
 * @param {Object} [options] その他各種オプション
 *                           {boolean} [options.bmp=true] ... "ん"（n）の次がb.m.pの場合にnからmへ変換するかどうか
 *                           {"latin"|"hyphen"} [options.longSound="latin"] ... 長音の表し方
 * @return {string} ローマ字へ変換された文字列を返す
 */
import { translateKanaToHira } from "@utils/translateKanatoHira";

export const kanaToRoman = (targetStr: string): string => {
	/**
	 * 変換マップ
	 */
	const romanMap = {
		あ: "a",
		い: "i",
		う: "u",
		え: "e",
		お: "o",
		か: "ka",
		き: "ki",
		く: "ku",
		け: "ke",
		こ: "ko",
		さ: "sa",
		し: { hepburn: "shi", kunrei: "si" },
		す: "su",
		せ: "se",
		そ: "so",
		た: "ta",
		ち: { hepburn: "chi", kunrei: "ti" },
		つ: { hepburn: "tsu", kunrei: "tu" },
		て: "te",
		と: "to",
		な: "na",
		に: "ni",
		ぬ: "nu",
		ね: "ne",
		の: "no",
		は: "ha",
		ひ: "hi",
		ふ: { hepburn: "fu", kunrei: "hu" },
		へ: "he",
		ほ: "ho",
		ま: "ma",
		み: "mi",
		む: "mu",
		め: "me",
		も: "mo",
		や: "ya",
		ゆ: "yu",
		よ: "yo",
		ら: "ra",
		り: "ri",
		る: "ru",
		れ: "re",
		ろ: "ro",
		わ: "wa",
		ゐ: "wi",
		ゑ: "we",
		を: { hepburn: "o", kunrei: "wo" },
		ん: "n",
		が: "ga",
		ぎ: "gi",
		ぐ: "gu",
		げ: "ge",
		ご: "go",
		ざ: "za",
		じ: { hepburn: "ji", kunrei: "zi" },
		ず: "zu",
		ぜ: "ze",
		ぞ: "zo",
		だ: "da",
		ぢ: { hepburn: "ji", kunrei: "di" },
		づ: { hepburn: "zu", kunrei: "du" },
		で: "de",
		ど: "do",
		ば: "ba",
		び: "bi",
		ぶ: "bu",
		べ: "be",
		ぼ: "bo",
		ぱ: "pa",
		ぴ: "pi",
		ぷ: "pu",
		ぺ: "pe",
		ぽ: "po",
		きゃ: "kya",
		きぃ: "kyi",
		きゅ: "kyu",
		きぇ: "kye",
		きょ: "kyo",
		くぁ: "qa",
		くぃ: "qi",
		くぇ: "qe",
		くぉ: "qo",
		くゃ: "qya",
		くゅ: "qyu",
		くょ: "qyo",
		しゃ: { hepburn: "sha", kunrei: "sya" },
		しぃ: "syi",
		しゅ: { hepburn: "shu", kunrei: "syu" },
		しぇ: "sye",
		しょ: { hepburn: "sho", kunrei: "syo" },
		ちゃ: { hepburn: "cha", kunrei: "tya" },
		ちぃ: ["tyi"],
		ちゅ: { hepburn: "chu", kunrei: "tyu" },
		ちぇ: ["tye"],
		ちょ: { hepburn: "cho", kunrei: "tyo" },
		てゃ: "tha",
		てぃ: "thi",
		てゅ: "thu",
		てぇ: "the",
		てょ: "tho",
		ひゃ: "hya",
		ひぃ: "hyi",
		ひゅ: "hyu",
		ひぇ: "hye",
		ひょ: "hyo",
		ふぁ: "fa",
		ふぃ: "fi",
		ふぇ: "fe",
		ふぉ: "fo",
		みゃ: "mya",
		みぃ: "myi",
		みゅ: "myu",
		みぇ: "mye",
		みょ: "myo",
		ヴぁ: "va",
		ヴぃ: "vi",
		ヴぇ: "ve",
		ヴぉ: "vo",
		ぎゃ: "gya",
		ぎぃ: "gyi",
		ぎゅ: "gyu",
		ぎぇ: "gye",
		ぎょ: "gyo",
		じゃ: { hepburn: "ja", kunrei: "zya" },
		じぃ: "zyi",
		じゅ: { hepburn: "ju", kunrei: "zyu" },
		じぇ: "zye",
		じょ: { hepburn: "jo", kunrei: "zyo" },
		ぢゃ: { hepburn: "dya", kunrei: "zya" },
		ぢぃ: "dyi",
		ぢゅ: { hepburn: "dyu", kunrei: "zya" },
		ぢぇ: "dye",
		ぢょ: { hepburn: "dyo", kunrei: "zya" },
		びゃ: "bya",
		びぃ: "byi",
		びゅ: "byu",
		びぇ: "bye",
		びょ: "byo",
		ぴゃ: "pya",
		ぴぃ: "pyi",
		ぴゅ: "pyu",
		ぴぇ: "pye",
		ぴょ: "pyo",
		ぁ: "xa",
		ぃ: "xi",
		ぅ: "xu",
		ぇ: "xe",
		ぉ: "xo",
		ゃ: "xya",
		ゅ: "xyu",
		ょ: "xyo",
		っ: "xtu",
		ヴ: "vu",
		ー: "-",
		"、": ", ",
		"，": ", ",
		"。": "."
	};

	/**
	 * 長音のラテン文字
	 */
	const latins = {
		a: 257,
		i: 299,
		u: 363,
		e: 275,
		o: 333
	};

	const type = "hepburn";
	const options = {
		bmp: true,
		longSound: "latin"
	};

	let remStr = String(targetStr);
	let result = "";
	let slStr;
	let roman;
	let lastStr;

	/**
	 * 残りの文字列から1文字を切り抜く
	 * @return {string} 切り抜いた1つの文字列を返す
	 */
	const splice = (): string => {
		const oneChar = remStr.slice(0, 1);
		remStr = remStr.slice(1);
		return oneChar;
	};

	/**
	 * 残りの文字列の最初が小文字か判定
	 * @return {boolean} 小文字の場合はtrue、そうでない場合はfalseを返す
	 */
	const isSmallChar = (): boolean => {
		return !!remStr.slice(0, 1).match(/^[ぁぃぅぇぉゃゅょァィゥェォャュョ]$/);
	};

	/**
	 * ひらがなから対応するローマ字を取得
	 * @param {string} kana 元となるひらがな
	 * @return {string} 見つかった場合は対応するローマ字、見つからなかったら元のひらがなを返す
	 */
	const getRoman = (kana: string): string => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const romanLetter = romanMap[translateKanaToHira(kana)];
		if (romanLetter) {
			if (typeof romanLetter === "string") {
				return romanLetter;
			}
			return romanLetter.hepburn;
		}
		return kana;
	};

	while (remStr) {
		slStr = splice();

		if (slStr.match(/^(っ|ッ)$/)) {
			slStr = splice();
			if (isSmallChar()) slStr += splice();

			roman = getRoman(slStr);
			roman = (roman !== slStr ? roman.slice(0, 1) : "") + roman;
		} else {
			if (isSmallChar()) slStr += splice();

			roman = getRoman(slStr);
		}

		const nextRoman = kanaToRoman(remStr.slice(0, 1));
		if (roman === "n") {
			if (nextRoman.match(/^[aiueo]$/)) {
				if (type === "hepburn") {
					roman += "-";
				} else {
					roman += "'";
				}
			} else if (
				options.bmp &&
				nextRoman.match(/^[bmp]/) &&
				type === "hepburn"
			) {
				roman = "m";
			}
		} else if (roman === "-") {
			lastStr = result.match(/[aiueo]$/);
			if (lastStr && options.longSound === "latin") {
				result = result.slice(0, -1);
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				roman = String.fromCharCode(latins[lastStr[0]]);
			}
		}

		result += roman;
	}

	return result;
};
