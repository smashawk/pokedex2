import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPokeData } from "@api/requests/getPokeData";
import mockPokeData from "./mocks/mockPokeData.json";

describe("getPokeData", () => {
	const mock = new MockAdapter(axios);

	afterEach(() => {
		mock.reset();
	});

	it("should succeed", async () => {
		const no = 1;
		mock
			.onGet(`https://pokeapi.co/api/v2/pokemon/${no}`)
			.reply(200, mockPokeData);

		const PokeData = await getPokeData(no);

		expect(PokeData.data.id).toBe(mockPokeData.id);
	});

	it("should fail with nonexistent no", async () => {
		const no = 0;
		mock.onGet(`https://pokeapi.co/api/v2/pokemon/${no}`).reply(404, {});

		try {
			await getPokeData(no);
		} catch (error) {
			expect(error.response.status).toBe(404);
		}
	});
});
