import { decidePartnerInfo } from "@utils/decidePartnerInfo";

describe("decidePartnerInfo", () => {
	it.each([
		["obake_fe"],
		["ひらがな"],
		["カタカナ"],
		["漢字"],
		["数字123"],
		["記号¥^-@[]/.;|~"],
		["絵文字👻"]
	])("decidePartnerNo", (name) => {
		const partnerInfo = decidePartnerInfo(name);
		expect(partnerInfo.pokeNo).toBeGreaterThan(0);
		expect(partnerInfo.pokeNo).toBeLessThan(808);
	});

	it("807ぴったり", () => {
		const partnerInfo = decidePartnerInfo("6'");
		expect(partnerInfo.pokeNo).toBeGreaterThan(0);
		expect(partnerInfo.pokeNo).toBeLessThan(808);
		expect(partnerInfo.natureNo.ja).toBe("おだやか");
		expect(partnerInfo.charNo.ja).toBe("ものをよくちらかす");
	});

	it("ユニーク値テスト", () => {
		const partnerInfo1 = decidePartnerInfo("6'");
		const partnerInfo2 = decidePartnerInfo("っ$");

		expect(partnerInfo1.pokeNo).toBe(partnerInfo2.pokeNo);
		expect(partnerInfo1.natureNo.ja).not.toBe(partnerInfo2.natureNo.ja);
		expect(partnerInfo1.charNo.ja).not.toBe(partnerInfo2.charNo.ja);
	});
});
