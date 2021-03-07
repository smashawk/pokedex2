import { decidePartnerInfo } from "@utils/decidePartnerInfo";

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
		expect(decidePartnerInfo(name)).toBeGreaterThan(0);
		expect(decidePartnerInfo(name)).toBeLessThan(793);
	});

	it("792ぴったり", () => {
		expect(decidePartnerInfo("ddddddd\\")).toBeGreaterThan(0);
		expect(decidePartnerInfo("ddddddd\\")).toBeLessThan(793);
	});
});
