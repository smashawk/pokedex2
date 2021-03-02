import { expectSaga } from "redux-saga-test-plan";
import PokeSpecies1 from "@api/mocks/pokeSpecies1.mock.json";
import { normalizePokeData } from "@store/getPokeSpecies/normalizer";
import * as actions from "@store/getPokeSpecies/actions";
import * as reducers from "@store/getPokeSpecies/reducers";
import {
	watchSearchNameGetPokeSpecies,
	watchSearchPartnerGetPokeSpecies,
	watchSearchTypeGetPokeSpecies
} from "@sagas/getPokeSpeciesSaga";

describe("getPokeSpecies", () => {
	describe("searchName", () => {
		const handler = jest.fn();

		it("should succeeded", () => {
			const no = 1;
			const normalizedPokeData = normalizePokeData(PokeSpecies1);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchSearchNameGetPokeSpecies, handler)
				.withReducer(reducers.searchNameGetPokeSpeciesReducer as never)
				// 最終的に期待する結果
				.put(actions.searchNameFetchSuccess(normalizedPokeData))
				.dispatch(actions.searchNameFetchStarted(no))
				.hasFinalState({ ...reducers.initialState, ...normalizedPokeData })
				.run();
		});

		it("should failed with nonexistent no", () => {
			const error = {
				response: {
					status: 404
				}
			};
			const no = 0;
			handler.mockReturnValue(error);

			expectSaga(watchSearchNameGetPokeSpecies, handler)
				.withReducer(reducers.searchNameGetPokeSpeciesReducer as never)
				// 最終的に期待する結果
				.put(actions.searchNameFetchFailed(error))
				.dispatch(actions.searchNameFetchStarted(no))
				.hasFinalState({ ...reducers.initialState })
				.run();
		});
	});

	describe("searchType", () => {
		const handler = jest.fn();

		it("should succeeded", () => {
			const no = 1;
			const normalizedPokeData = normalizePokeData(PokeSpecies1);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchSearchTypeGetPokeSpecies, handler)
				.withReducer(reducers.searchTypeGetPokeSpeciesReducer as never)
				// 最終的に期待する結果
				.put(actions.searchTypeFetchSuccess(normalizedPokeData))
				.dispatch(actions.searchTypeFetchStarted(no))
				.hasFinalState({ ...reducers.initialState, ...normalizedPokeData })
				.run();
		});

		it("should failed with nonexistent no", () => {
			const error = {
				response: {
					status: 404
				}
			};
			const no = 0;
			handler.mockReturnValue(error);

			expectSaga(watchSearchTypeGetPokeSpecies, handler)
				.withReducer(reducers.searchTypeGetPokeSpeciesReducer as never)
				// 最終的に期待する結果
				.put(actions.searchTypeFetchFailed(error))
				.dispatch(actions.searchTypeFetchStarted(no))
				.hasFinalState({ ...reducers.initialState })
				.run();
		});
	});

	describe("searchPartner", () => {
		const handler = jest.fn();

		it("should succeeded", () => {
			const no = 1;
			const normalizedPokeData = normalizePokeData(PokeSpecies1);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchSearchPartnerGetPokeSpecies, handler)
				.withReducer(reducers.searchPartnerGetPokeSpeciesReducer as never)
				// 最終的に期待する結果
				.put(actions.searchPartnerFetchSuccess(normalizedPokeData))
				.dispatch(actions.searchPartnerFetchStarted(no))
				.hasFinalState({ ...reducers.initialState, ...normalizedPokeData })
				.run();
		});

		it("should failed with nonexistent no", () => {
			const error = {
				response: {
					status: 404
				}
			};
			const no = 0;
			handler.mockReturnValue(error);

			expectSaga(watchSearchPartnerGetPokeSpecies, handler)
				.withReducer(reducers.searchPartnerGetPokeSpeciesReducer as never)
				// 最終的に期待する結果
				.put(actions.searchPartnerFetchFailed(error))
				.dispatch(actions.searchPartnerFetchStarted(no))
				.hasFinalState({ ...reducers.initialState })
				.run();
		});
	});
});
