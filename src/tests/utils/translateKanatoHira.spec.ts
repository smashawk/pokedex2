import { translateKanaToHira } from "@utils/translateKanatoHira";

describe("translateKanatoHira", () => {
	it.each([
		["フシギダネ", "ふしぎだね"],
		["ピカチュウ", "ぴかちゅう"],
		["ピィ", "ぴぃ"],
		["ポリゴン２", "ぽりごん２"],
		["ポリゴンＺ", "ぽりごんＺ"],
		["タイプ：ヌル", "たいぷ：ぬる"],
		["くさ", "くさ"]
	])("translateKanatoHira", (name, expectValue) => {
		expect(translateKanaToHira(name)).toBe(expectValue);
	});
});
