import { createDescArray } from "@utils/createDescArray";

describe("createDescArray", () => {
	it("createDescArray", () => {
		const pokeData = {
			id: 1,
			name: "bulbasaur",
			stats: [
				{ base_stat: 45 },
				{ base_stat: 49 },
				{ base_stat: 49 },
				{ base_stat: 65 },
				{ base_stat: 65 },
				{ base_stat: 45 }
			],
			types: [
				{ ja: "くさ", en: "grass" },
				{ ja: "どく", en: "poison" }
			]
		};

		const pokeSpecies = {
			id: 1,
			name: {
				ja: "フシギダネ",
				en: "bulbasaur"
			},
			flavor_text_entries: {
				ja:
					"生まれたときから　背中に 不思議な　タネが　植えてあって 体と　ともに　育つという。",
				en:
					"A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON."
			},
			genera: {
				ja: "たねポケモン",
				en: "Seed Pokémon"
			}
		};

		expect(createDescArray(pokeData, pokeSpecies)).toEqual([
			{
				term: "No",
				description: 1
			},
			{
				term: "Name",
				description: "フシギダネ"
			},
			{
				term: "Species",
				description: "たねポケモン"
			},
			{
				term: "Type1",
				description: "grass"
			},
			{
				term: "Type2",
				description: "poison"
			},
			{
				term: "Text",
				description:
					"生まれたときから　背中に 不思議な　タネが　植えてあって 体と　ともに　育つという。"
			}
		]);
	});
});
