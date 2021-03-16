import { ChangeEvent, useEffect, useMemo, VFC } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/setSelectedOption/reducer";
import { GetPokeTypeDataType } from "@store/getPokeTypeData/reducers";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { InputArea } from "@components/organisms/searchType/InputArea";
import { typeList } from "@constants/variables";
import { createSuggestArray } from "@utils/createSuggestArray";

export const EnhancedInputArea: VFC = () => {
	/** state */
	const switchState = useSelector<AppState, boolean>(
		(state) => state.searchType.switchState.switchState
	);
	const optionArray = useSelector<AppState, { option: OptionType[] }>(
		(state) => state.searchType.selectedOption,
		shallowEqual
	);
	const pokeTypeData = useSelector<AppState, GetPokeTypeDataType>(
		(state) => state.searchType.pokeTypeData,
		shallowEqual
	);
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchType.pokeData,
		shallowEqual
	);

	/** dispatchers */
	const dispatch = useDispatch();
	const { searchType } = dispatches;
	const setSwitchState = (switchStateArg: boolean): void => {
		searchType.setSwitchStateDispatcher(dispatch)(switchStateArg);
	};
	const setSelectedOption = (optionArrayArg: OptionType[]): void => {
		searchType.setSelectedOptionDispatcher(dispatch)(optionArrayArg);
	};
	const fetchPokeTypeData = (
		selectedOptionArray: OptionType[],
		optionArrayArg: OptionType[]
	): void => {
		searchType.getPokeTypeDataDispatcher(dispatch)(
			selectedOptionArray,
			optionArrayArg
		);
	};
	const fetchPokeData = (no: number): void => {
		searchType.getPokeDataDispatcher(dispatch)(no);
	};
	const fetchPokeSpecies = (no: number): void => {
		searchType.getPokeSpeciesDispatcher(dispatch)(no);
	};

	/** create list for suggest */
	const suggestArray = useMemo(() => {
		return createSuggestArray(typeList.map((data) => data.ja));
	}, [typeList]);

	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const switchType = query.get("switch");
		const type1No = query.get("type1");
		const type2No = query.get("type2");
		const pokemon = query.get("pokemon");

		/** add Query Strings if store have searchType State */
		if (
			(pokeTypeData.type1.no && !type1No) ||
			(pokeTypeData.type2.no && !type2No) ||
			(pokeData.id && !pokemon)
		) {
			H.replace(
				`/type?switch=${switchState}&type1=${pokeTypeData.type1.no}&type2=${pokeTypeData.type2.no}&pokemon=${pokeData.id}`
			);
			return;
		}

		/** show search result if URL has query */
		if (switchType) setSwitchState(switchType === "true");

		if (type1No || type2No) {
			const selectedOptionArray = suggestArray.filter(
				(item) => String(item.no) === type1No || String(item.no) === type2No
			);

			setSelectedOption(selectedOptionArray);
			fetchPokeTypeData(selectedOptionArray, optionArray.option);
		}
	}, []);

	/**
	 * toggle ANDSearch and ORSearch
	 * @param event event object
	 */
	const toggleSearchType = (event: ChangeEvent<HTMLInputElement>): void => {
		setSwitchState(event.target.checked);

		H.replace(
			`/type?switch=${event.target.checked}&type1=${pokeTypeData.type1.no}&type2=${pokeTypeData.type2.no}&pokemon=${pokeData.id}`
		);
	};

	/**
	 * fire this function when you change inputValue
	 * @param event event object don't use
	 * @param selectedOptionArray array including OptionType you select
	 */
	const decidePokeType = (
		event: unknown,
		selectedOptionArray: OptionType[]
	): void => {
		setSelectedOption(selectedOptionArray);
		fetchPokeTypeData(selectedOptionArray, optionArray.option);

		let no = pokeData.id;
		if (!selectedOptionArray.length) {
			fetchPokeData(0);
			fetchPokeSpecies(0);
			no = 0;
		}
		H.replace(
			`/type?switch=${switchState}&type1=${
				selectedOptionArray.length ? selectedOptionArray[0].no : 0
			}&type2=${
				selectedOptionArray.length === 2 ? selectedOptionArray[1].no : 0
			}&pokemon=${!no ? "" : pokeData.id}`
		);
	};

	return (
		<InputArea
			{...{
				suggestArray,
				optionArray,
				switchState,
				decidePokeType,
				toggleSearchType
			}}
		/>
	);
};
