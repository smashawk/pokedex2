import { createSuggestArray } from "@utils/createSuggestArray";

describe("createSuggestArray", () => {
	it("createSuggestArray", () => {
		const pokeDataArray = [
			{
				id: 1,
				name: {
					english: "Bulbasaur",
					japanese: "フシギダネ"
				}
			},
			{
				id: 2,
				name: {
					english: "Ivysaur",
					japanese: "フシギソウ"
				}
			}
		];

		expect(
			createSuggestArray(pokeDataArray.map((data) => data.name.japanese))
		).toEqual([
			{ value: "フシギダネふしぎだねfushigidane", label: "フシギダネ", no: 1 },
			{ value: "フシギソウふしぎそうfushigisou", label: "フシギソウ", no: 2 }
		]);
	});
});
