import { getPokeTypeData } from "@api/requests/getPokeTypeData";
import typeData from "@constants/type_data.json";

describe("getPokeTypeData", () => {
	it("should succeed", async () => {
		const type = "grass";
		const PokeData = await getPokeTypeData(type);

		expect(PokeData.status).toBe(200);
	});

	it("should fail with nonexistent type", async () => {
		const type = "";

		try {
			await getPokeTypeData(type);
		} catch (error) {
			expect(error.response.status).toBe(404);
		}
	});

	it("confirm existence about Pokemon type", async () => {
		const data = await Promise.all(
			typeData.map(async (tData) => {
				const response = await getPokeTypeData(tData.en);
				return { type: tData.en, status: response.status };
			})
		);

		expect(data).toEqual(
			typeData.map((tData) => ({ type: tData.en, status: 200 }))
		);
	});
});
