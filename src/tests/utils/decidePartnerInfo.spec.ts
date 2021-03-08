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
		expect(partnerInfo.pokeNo).toBeLessThan(793);
	});

	it("792ぴったり", () => {
		const partnerInfo = decidePartnerInfo("ddddddd\\");
		expect(partnerInfo.pokeNo).toBeGreaterThan(0);
		expect(partnerInfo.pokeNo).toBeLessThan(793);
		expect(partnerInfo.natureNo.ja).toBe("うっかりや");
		expect(partnerInfo.charNo.ja).toBe("まけずぎらい");
	});

	it("ユニーク値テスト1", () => {
		const partnerInfo1 = decidePartnerInfo("222222!!!");
		const partnerInfo2 = decidePartnerInfo("KKKKc");

		expect(partnerInfo1.pokeNo).toBe(partnerInfo2.pokeNo);
		expect(partnerInfo1.natureNo.ja).not.toBe(partnerInfo2.natureNo.ja);
		expect(partnerInfo1.charNo.ja).not.toBe(partnerInfo2.charNo.ja);
	});

	it("ユニーク値テスト2", () => {
		const partnerInfo1 = decidePartnerInfo("ddd");
		const partnerInfo2 = decidePartnerInfo("2222(<");

		expect(partnerInfo1.pokeNo).toBe(partnerInfo2.pokeNo);
		expect(partnerInfo1.natureNo.ja).not.toBe(partnerInfo2.natureNo.ja);
		expect(partnerInfo1.charNo.ja).not.toBe(partnerInfo2.charNo.ja);
	});
});
