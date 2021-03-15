import {
	MouseEvent as ReactMouseEvent,
	useCallback,
	useEffect,
	useMemo,
	VFC
} from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { GetPokeTypeDataType } from "@store/getPokeTypeData/reducers";
import { createAndPokeArray } from "@utils/createAndPokeArray";
import { createOrPokeArray } from "@utils/createOrPokeArray";
import { IconListArea } from "@components/organisms/searchType/IconListArea";

type StateProps = {
	switchState: boolean;
	pokeTypeData: GetPokeTypeDataType;
	pokeData: NormalizedPokeDataType;
};

type DispatchProps = {
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedIconListArea: VFC<Props> = ({
	switchState,
	pokeTypeData,
	pokeData,
	fetchPokeData,
	fetchPokeSpecies
}) => {
	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const pokemon = query.get("pokemon");

		/** add Query Strings if store have searchType State */
		if (pokemon) {
			fetchPokeData(+pokemon);
			fetchPokeSpecies(+pokemon);
		}
	}, []);

	/**
	 * fire this function when you click Pokemon Icon
	 * @param event event object
	 */
	const showPokeData = useCallback(
		(event: ReactMouseEvent<HTMLInputElement, MouseEvent>): void => {
			const { value } = event.target as HTMLInputElement;
			fetchPokeData(+value);
			fetchPokeSpecies(+value);

			H.replace(
				`/type?switch=${switchState}&type1=${pokeTypeData.type1.no}&type2=${
					pokeTypeData.type2.no
				}&pokemon=${+value}`
			);
		},
		[fetchPokeData, fetchPokeSpecies, switchState, pokeTypeData]
	);

	/** create Pokemon list for AND Search */
	const andPokeList = useMemo(() => createAndPokeArray(pokeTypeData), [
		pokeTypeData
	]);

	/** create Pokemon list for OR Search */
	const orPokeList = useMemo(() => createOrPokeArray(pokeTypeData), [
		pokeTypeData
	]);

	return (
		<IconListArea
			{...{
				orPokeList,
				andPokeList,
				switchState,
				pokeTypeData,
				pokeData,
				showPokeData
			}}
		/>
	);
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	switchState: state.searchType.switchState.switchState,
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		fetchPokeData: (no: number): void => {
			searchType.getPokeDataDispatcher(dispatch)(no);
		},
		fetchPokeSpecies: (no: number): void => {
			searchType.getPokeSpeciesDispatcher(dispatch)(no);
		}
	};
};

export const EnhancedIconListArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedIconListArea);
