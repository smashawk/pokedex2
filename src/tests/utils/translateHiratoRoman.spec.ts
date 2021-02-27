import { translateHiraToRoman } from "@utils/translateHiratoRoman";

describe("translateHiraToRoman", () => {
	it("ふしぎだね", () => {
		expect(translateHiraToRoman("ふしぎだね")).toBe("fushigidane");
	});
	it("りざーどん", () => {
		expect(translateHiraToRoman("りざーどん")).toBe("rizadon");
	});
	it("かめっくす", () => {
		expect(translateHiraToRoman("かめっくす")).toBe("kamekkusu");
	});
	it("きゃたぴー", () => {
		expect(translateHiraToRoman("きゃたぴー")).toBe("kyatapi");
	});
	it("ぴかちゅう", () => {
		expect(translateHiraToRoman("ぴかちゅう")).toBe("pikachuu");
	});
	it("もるふぉん", () => {
		expect(translateHiraToRoman("もるふぉん")).toBe("morufon");
	});
	it("けーしぃ", () => {
		expect(translateHiraToRoman("けーしぃ")).toBe("kesyi");
	});
	it("しぇるだー", () => {
		expect(translateHiraToRoman("しぇるだー")).toBe("sheruda");
	});
	it("ふぁいやー", () => {
		expect(translateHiraToRoman("ふぁいやー")).toBe("faiya");
	});
	it("ぴぃ", () => {
		expect(translateHiraToRoman("ぴぃ")).toBe("pyi");
	});
	it("えーふぃ", () => {
		expect(translateHiraToRoman("えーふぃ")).toBe("efi");
	});
	it("ぽりごん２", () => {
		expect(translateHiraToRoman("ぽりごん２")).toBe("porigon２");
	});
	it("せれびぃ", () => {
		expect(translateHiraToRoman("せれびぃ")).toBe("serebixi");
	});
	it("ちぇりむ", () => {
		expect(translateHiraToRoman("ちぇりむ")).toBe("cherimu");
	});
	it("ぽりごんＺ", () => {
		expect(translateHiraToRoman("ぽりごんＺ")).toBe("porigonＺ");
	});
	it("でぃあるが", () => {
		expect(translateHiraToRoman("でぃあるが")).toBe("dhiaruga");
	});
	it("うぉーぐる", () => {
		expect(translateHiraToRoman("うぉーぐる")).toBe("uxoguru");
	});
	it("ふらーじぇす", () => {
		expect(translateHiraToRoman("ふらーじぇす")).toBe("furajesu");
	});
	it("めぇーくる", () => {
		expect(translateHiraToRoman("めぇーくる")).toBe("mexekuru");
	});
	it("すなばぁ", () => {
		expect(translateHiraToRoman("すなばぁ")).toBe("sunabaxa");
	});
	it("たいぷ：ぬる", () => {
		expect(translateHiraToRoman("たいぷ：ぬる")).toBe("taipu：nuru");
	});
	it("しるゔぁでぃ", () => {
		expect(translateHiraToRoman("しるゔぁでぃ")).toBe("shiruvadhi");
	});
});
