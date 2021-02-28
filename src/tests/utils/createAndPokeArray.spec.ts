import { createAndPokeArray } from "@utils/createAndPokeArray";

describe("createAndPokeArray", () => {
	it("none type", () => {
		const pokeTypeData = {
			type1: {
				type: "",
				pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
			},
			type2: {
				type: "",
				pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
			}
		};
		expect(createAndPokeArray(pokeTypeData)).toEqual([
			{ name: { ja: "", en: "" }, no: 0 }
		]);
	});

	it("only type1", () => {
		const pokeTypeData = {
			type1: {
				type: "grass",
				pokemon: [
					{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 },
					{ name: { ja: "チコリータ", en: "Chikorita" }, no: 152 }
				]
			},
			type2: {
				type: "",
				pokemon: [{ name: { ja: "", en: "" }, no: 0 }]
			}
		};
		expect(createAndPokeArray(pokeTypeData)).toEqual([
			{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 },
			{ name: { ja: "チコリータ", en: "Chikorita" }, no: 152 }
		]);
	});

	it("both type1 and type2", () => {
		const pokeTypeData = {
			type1: {
				type: "grass",
				pokemon: [
					{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 },
					{ name: { ja: "チコリータ", en: "Chikorita" }, no: 152 }
				]
			},
			type2: {
				type: "poison",
				pokemon: [{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 }]
			}
		};
		expect(createAndPokeArray(pokeTypeData)).toEqual([
			{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 }
		]);
	});

	it("not duplicate type1 and type2", () => {
		const pokeTypeData = {
			type1: {
				type: "grass",
				pokemon: [
					{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 },
					{ name: { ja: "チコリータ", en: "Chikorita" }, no: 152 }
				]
			},
			type2: {
				type: "fire",
				pokemon: [{ name: { ja: "ヒトカゲ", en: "Charmander" }, no: 4 }]
			}
		};
		expect(createAndPokeArray(pokeTypeData)).toEqual([]);
	});
});
