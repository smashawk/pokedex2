import { decidePartnerNo } from "@utils/decidePartnerNo";

describe("decidePartnerNo", () => {
	it("obake_fe", () => {
		expect(decidePartnerNo("obake_fe")).toBeGreaterThan(0);
		expect(decidePartnerNo("obake_fe")).toBeLessThan(793);
	});
	it("ひらがな", () => {
		expect(decidePartnerNo("ひらがな")).toBeGreaterThan(0);
		expect(decidePartnerNo("ひらがな")).toBeLessThan(793);
	});
	it("カタカナ", () => {
		expect(decidePartnerNo("カタカナ")).toBeGreaterThan(0);
		expect(decidePartnerNo("カタカナ")).toBeLessThan(793);
	});
	it("漢字", () => {
		expect(decidePartnerNo("漢字")).toBeGreaterThan(0);
		expect(decidePartnerNo("漢字")).toBeLessThan(793);
	});
	it("数字", () => {
		expect(decidePartnerNo("数字123")).toBeGreaterThan(0);
		expect(decidePartnerNo("数字123")).toBeLessThan(793);
	});
	it("記号", () => {
		expect(decidePartnerNo("¥^-@[]/.;|~")).toBeGreaterThan(0);
		expect(decidePartnerNo("¥^-@[]/.;|~")).toBeLessThan(793);
	});
	it("絵文字", () => {
		expect(decidePartnerNo("👻")).toBeGreaterThan(0);
		expect(decidePartnerNo("👻")).toBeLessThan(793);
	});
	it("792ぴったり", () => {
		expect(decidePartnerNo("ddddddd\\")).toBeGreaterThan(0);
		expect(decidePartnerNo("ddddddd\\")).toBeLessThan(793);
	});
});
