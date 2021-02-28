import { translateKanaToHira } from "@utils/translateKanatoHira";

describe("translateKanatoHira", () => {
	it("フシギダネ", () => {
		expect(translateKanaToHira("フシギダネ")).toBe("ふしぎだね");
	});
	it("ピカチュウ", () => {
		expect(translateKanaToHira("ピカチュウ")).toBe("ぴかちゅう");
	});
	it("ピィ", () => {
		expect(translateKanaToHira("ピィ")).toBe("ぴぃ");
	});
	it("ポリゴン２", () => {
		expect(translateKanaToHira("ポリゴン２")).toBe("ぽりごん２");
	});
	it("ポリゴンＺ", () => {
		expect(translateKanaToHira("ポリゴンＺ")).toBe("ぽりごんＺ");
	});
	it("タイプ：ヌル", () => {
		expect(translateKanaToHira("タイプ：ヌル")).toBe("たいぷ：ぬる");
	});
});
