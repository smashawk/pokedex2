import { decidePartnerNo } from "@utils/decidePartnerNo";

describe("decidePartnerNo", () => {
	it.each([
		["obake_fe"],
		["ひらがな"],
		["カタカナ"],
		["漢字"],
		["数字123"],
		["記号¥^-@[]/.;|~"],
		["絵文字👻"]
	])("decidePartnerNo", (name) => {
		expect(decidePartnerNo(name)).toBeGreaterThan(0);
		expect(decidePartnerNo(name)).toBeLessThan(793);
	});

	it("792ぴったり", () => {
		expect(decidePartnerNo("ddddddd\\")).toBeGreaterThan(0);
		expect(decidePartnerNo("ddddddd\\")).toBeLessThan(793);
	});
});
