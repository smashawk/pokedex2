import { ChangeEvent, useEffect, useMemo, VFC } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Switcher } from "@components/atoms/Switcher";
import { SuggestMultiTextField } from "@components/atoms/SuggestMultiTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { getPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import typeData from "@data/type_data.json";

import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		inputBox: {
			display: "flex",
			justifyContent: "center"
		}
	})
);

type StateProps = {
	switchState: boolean;
	optionArray: { option: OptionType[] };
	pokeTypeData: getPokeTypeDataType;
	pokeData: normalizedPokeDataType;
};

type DispatchProps = {
	setSwitchState: (switchState: boolean) => void;
	setSelectedOption: (option: OptionType[]) => void;
	fetchPokeTypeData: (
		selectedOptionArray: OptionType[],
		optionArray: OptionType[]
	) => void;
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedInputArea: VFC<Props> = ({
	switchState,
	optionArray,
	pokeTypeData,
	pokeData,
	setSwitchState,
	setSelectedOption,
	fetchPokeTypeData,
	fetchPokeData,
	fetchPokeSpecies
}) => {
	/** create list for suggest */
	const suggestArray = useMemo(
		() =>
			typeData.map((value) => {
				return {
					value: value.en,
					label: value.ja,
					no: value.no
				};
			}),
		[]
	);

	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const switchType = query.get("switch");
		const type1 = query.get("type1");
		const type2 = query.get("type2");
		const pokemon = query.get("pokemon");

		/** add Query Strings if store have searchType State */
		if (
			(pokeTypeData.type1.type && !type1) ||
			(pokeTypeData.type2.type && !type2) ||
			(pokeData.id && !pokemon)
		) {
			H.replace(
				`/type?switch=${switchState}&type1=${pokeTypeData.type1.type}&type2=${pokeTypeData.type2.type}&pokemon=${pokeData.id}`
			);
			return;
		}

		/** show search result if URL has query */
		if (switchType) {
			setSwitchState(switchType === "true");
		}
		if (type1 || type2) {
			const selectedOptionArray = suggestArray.filter(
				(item) => item.value === type1 || item.value === type2
			);

			setSelectedOption(selectedOptionArray);
			fetchPokeTypeData(selectedOptionArray, optionArray.option);
		}
	}, []);

	/**
	 * toggle AND Search and OR Search
	 * @param event event object
	 */
	const changeSearchType = (event: ChangeEvent<HTMLInputElement>): void => {
		setSwitchState(event.target.checked);

		H.replace(
			`/type?switch=${event.target.checked}&type1=${pokeTypeData.type1.type}&type2=${pokeTypeData.type2.type}&pokemon=${pokeData.id}`
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

		if (!selectedOptionArray.length) {
			fetchPokeData(0);
			fetchPokeSpecies(0);
		}

		H.replace(
			`/type?switch=${switchState}&type1=${
				selectedOptionArray.length ? selectedOptionArray[0].value : ""
			}&type2=${
				selectedOptionArray.length === 2 ? selectedOptionArray[1].value : ""
			}&pokemon=${pokeData.id || ""}`
		);
	};

	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h2">2. タイプ検索</Typography>
			<Box mt={9} className={classes.inputBox}>
				<SuggestMultiTextField
					suggestList={suggestArray}
					option={optionArray.option}
					onChange={decidePokeType}
				/>
				<Switcher
					checked={switchState}
					label="AND/OR"
					onChange={changeSearchType}
				/>
			</Box>
		</Box>
	);
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	switchState: state.searchType.switchState.switchState,
	optionArray: state.searchType.selectedOption,
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		setSwitchState: (switchState: boolean): void => {
			searchType.setSwitchStateDispatcher(dispatch)(switchState);
		},
		setSelectedOption: (optionArray: OptionType[]): void => {
			searchType.setSelectedOptionDispatcher(dispatch)(optionArray);
		},
		fetchPokeTypeData: (
			selectedOptionArray: OptionType[],
			optionArray: OptionType[]
		): void => {
			searchType.getPokeTypeDataDispatcher(dispatch)(
				selectedOptionArray,
				optionArray
			);
		},
		fetchPokeData: (no: number): void => {
			searchType.getPokeDataDispatcher(dispatch)(no);
		},
		fetchPokeSpecies: (no: number): void => {
			searchType.getPokeSpeciesDispatcher(dispatch)(no);
		}
	};
};

export const InputArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedInputArea);
