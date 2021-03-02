import { getPokeSpecies } from "@api/requests/getPokeSpecies";

describe("getPokeSpecies", () => {
	it("should succeed", async () => {
		const no = 1;
		const PokeData = await getPokeSpecies(no);

		expect(PokeData.status).toBe(200);
	});

	it("should fail with nonexistent no", async () => {
		const no = 0;

		try {
			await getPokeSpecies(no);
		} catch (error) {
			expect(error.response.status).toBe(404);
		}
	});

	/**
	 * use if you need
	 */
	// it("confirm existence about no 1~300", async () => {
	// 	const noArray = [...Array(300).keys()].map((i) => i + 1);
	//
	// 	const data = await Promise.all(
	// 		noArray.map(async (no) => {
	// 			const response = await getPokeSpecies(no);
	// 			return { no, status: response.status };
	// 		})
	// 	);
	//
	// 	expect(data).toEqual(noArray.map((no) => ({ no, status: 200 })));
	// });
	//
	// it("confirm existence about no 301~550", async () => {
	// 	const noArray = [...Array(250).keys()].map((i) => i + 301);
	//
	// 	const data = await Promise.all(
	// 		noArray.map(async (no) => {
	// 			const response = await getPokeSpecies(no);
	// 			return { no, status: response.status };
	// 		})
	// 	);
	//
	// 	expect(data).toEqual(noArray.map((no) => ({ no, status: 200 })));
	// });
	//
	// it("confirm existence about no 551~792", async () => {
	// 	const noArray = [...Array(242).keys()].map((i) => i + 551);
	//
	// 	const data = await Promise.all(
	// 		noArray.map(async (no) => {
	// 			const response = await getPokeSpecies(no);
	// 			return { no, status: response.status };
	// 		})
	// 	);
	//
	// 	expect(data).toEqual(noArray.map((no) => ({ no, status: 200 })));
	// });
});
