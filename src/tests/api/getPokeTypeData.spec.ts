import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import { typeList } from "@constants/variables";

describe("getPokeTypeData", () => {
	it("should succeed", async () => {
		const typeNo = 12;
		const PokeData = await getPokeTypeData(typeNo);

		expect(PokeData.status).toBe(200);
	});

	it("should fail with nonexistent type", async () => {
		const typeNo = 0;

		try {
			await getPokeTypeData(typeNo);
		} catch (error) {
			expect(error.response.status).toBe(404);
		}
	});

	it("confirm existence about Pokemon type", async () => {
		const data = await Promise.all(
			typeList.map(async (typeData) => {
				const response = await getPokeTypeData(typeData.no);
				return { type: typeData.en, status: response.status };
			})
		);

		expect(data).toEqual(
			typeList.map((typeData) => ({ type: typeData.en, status: 200 }))
		);
	});
});
