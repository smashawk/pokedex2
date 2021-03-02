import { expectSaga } from "redux-saga-test-plan";
import PokeData1 from "@api/mocks/pokeData1.mock.json";
import {
	watchSearchNameGetPokeData,
	watchSearchPartnerGetPokeData,
	watchSearchTypeGetPokeData
} from "@sagas/getPokeDataSaga";
import { normalizePokeData } from "@store/getPokeData/normalizer";
import * as actions from "@store/getPokeData/actions";
import * as reducers from "@store/getPokeData/reducers";

describe("getPokeSaga", () => {
	describe("searchName", () => {
		const handler = jest.fn();

		it("should succeeded", () => {
			const no = 1;
			const normalizedPokeData = normalizePokeData(PokeData1);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchSearchNameGetPokeData, handler)
				.withReducer(reducers.searchNameGetPokeDataReducer as never)
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

			expectSaga(watchSearchNameGetPokeData, handler)
				.withReducer(reducers.searchNameGetPokeDataReducer as never)
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
			const normalizedPokeData = normalizePokeData(PokeData1);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchSearchTypeGetPokeData, handler)
				.withReducer(reducers.searchTypeGetPokeDataReducer as never)
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

			expectSaga(watchSearchTypeGetPokeData, handler)
				.withReducer(reducers.searchTypeGetPokeDataReducer as never)
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
			const normalizedPokeData = normalizePokeData(PokeData1);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchSearchPartnerGetPokeData, handler)
				.withReducer(reducers.searchPartnerGetPokeDataReducer as never)
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

			expectSaga(watchSearchPartnerGetPokeData, handler)
				.withReducer(reducers.searchPartnerGetPokeDataReducer as never)
				// 最終的に期待する結果
				.put(actions.searchPartnerFetchFailed(error))
				.dispatch(actions.searchPartnerFetchStarted(no))
				.hasFinalState({ ...reducers.initialState })
				.run();
		});
	});
});
