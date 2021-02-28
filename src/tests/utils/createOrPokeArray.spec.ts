import { createOrPokeArray } from "@utils/createOrPokeArray";

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
		expect(createOrPokeArray(pokeTypeData)).toEqual([]);
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
		expect(createOrPokeArray(pokeTypeData)).toEqual([
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
				type: "fire",
				pokemon: [{ name: { ja: "ヒトカゲ", en: "Charmander" }, no: 4 }]
			}
		};
		expect(createOrPokeArray(pokeTypeData)).toEqual([
			{ name: { ja: "フシギダネ", en: "Bulbasaur" }, no: 1 },
			{ name: { ja: "ヒトカゲ", en: "Charmander" }, no: 4 },
			{ name: { ja: "チコリータ", en: "Chikorita" }, no: 152 }
		]);
	});
});
