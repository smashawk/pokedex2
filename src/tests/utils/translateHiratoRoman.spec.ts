import { translateHiraToRoman } from "@utils/translateHiratoRoman";

describe("translateHiraToRoman", () => {
	it.each([
		["ふしぎだね", "fushigidane"],
		["りざーどん", "rizadon"],
		["かめっくす", "kamekkusu"],
		["きゃたぴー", "kyatapi"],
		["ぴかちゅう", "pikachuu"],
		["もるふぉん", "morufon"],
		["けーしぃ", "kesyi"],
		["しぇるだー", "sheruda"],
		["ふぁいやー", "faiya"],
		["ぴぃ", "pyi"],
		["えーふぃ", "efi"],
		["ぽりごん２", "porigon２"],
		["せれびぃ", "serebixi"],
		["ちぇりむ", "cherimu"],
		["ぽりごんＺ", "porigonＺ"],
		["でぃあるが", "dhiaruga"],
		["うぉーぐる", "uxoguru"],
		["ふらーじぇす", "furajesu"],
		["めぇーくる", "mexekuru"],
		["すなばぁ", "sunabaxa"],
		["たいぷ：ぬる", "taipu：nuru"],
		["しるゔぁでぃ", "shiruvadhi"]
	])("translateHiraToRoman", (name, expectValue) => {
		expect(translateHiraToRoman(name)).toBe(expectValue);
	});
});
