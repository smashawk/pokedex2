import { expectSaga } from "redux-saga-test-plan";
import pokeTypeGrass from "@api/mocks/pokeTypeGrass.mock.json";
import { normalizePokeData } from "@store/getPokeTypeData/normalizer";
import * as actions from "@store/getPokeTypeData/actions";
import * as reducers from "@store/getPokeTypeData/reducers";
import {
	watchGetPokeType1Data,
	watchGetPokeType2Data
} from "@sagas/getPokeTypeSaga";

describe("getPokeTypeSaga", () => {
	describe("type1", () => {
		const handler = jest.fn();

		it("should succeeded", () => {
			const typeNo = 12;
			const normalizedPokeData = normalizePokeData(pokeTypeGrass);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchGetPokeType1Data, handler)
				.withReducer(reducers.searchTypeGetPokeTypeDataReducer as never)
				// 最終的に期待する結果
				.put(actions.type1FetchSuccess(normalizedPokeData))
				.dispatch(actions.type1FetchStarted(typeNo))
				.hasFinalState({
					...reducers.initialState,
					type1: { ...normalizedPokeData }
				})
				.run();
		});

		it("should failed with nonexistent no", () => {
			const error = {
				response: {
					status: 404
				}
			};
			const type = 0;
			handler.mockReturnValue(error);

			expectSaga(watchGetPokeType1Data, handler)
				.withReducer(reducers.searchTypeGetPokeTypeDataReducer as never)
				// 最終的に期待する結果
				.put(actions.type1FetchFailed(error))
				.dispatch(actions.type1FetchStarted(type))
				.hasFinalState({ ...reducers.initialState })
				.run();
		});
	});

	describe("type2", () => {
		const handler = jest.fn();

		it("should succeeded", () => {
			const type = 12;
			const normalizedPokeData = normalizePokeData(pokeTypeGrass);
			handler.mockReturnValue(normalizedPokeData);

			expectSaga(watchGetPokeType2Data, handler)
				.withReducer(reducers.searchTypeGetPokeTypeDataReducer as never)
				// 最終的に期待する結果
				.put(actions.type2FetchSuccess(normalizedPokeData))
				.dispatch(actions.type2FetchStarted(type))
				.hasFinalState({
					...reducers.initialState,
					type2: { ...normalizedPokeData }
				})
				.run();
		});

		it("should failed with nonexistent no", () => {
			const error = {
				response: {
					status: 404
				}
			};
			const type = 0;
			handler.mockReturnValue(error);

			expectSaga(watchGetPokeType1Data, handler)
				.withReducer(reducers.searchTypeGetPokeTypeDataReducer as never)
				// 最終的に期待する結果
				.put(actions.type2FetchFailed(error))
				.dispatch(actions.type2FetchStarted(type))
				.hasFinalState({ ...reducers.initialState })
				.run();
		});
	});
});
