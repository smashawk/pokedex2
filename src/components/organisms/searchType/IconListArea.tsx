import { MouseEvent as ReactMouseEvent, useEffect, useMemo } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { PokeIconList } from "@components/atoms/PokeIconList";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import { getPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";
import { createAndPokeArray } from "@utils/createAndPokeArray";
import { createOrPokeArray } from "@utils/createOrPokeArray";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() =>
	createStyles({
		pokeList: {
			listStyle: "none",
			display: "flex",
			flexWrap: "wrap"
		}
	})
);

type StateProps = {
	switchState: boolean;
	pokeTypeData: getPokeTypeDataType;
	pokeData: formattedPokeDataType;
};

type DispatchProps = {
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const IconListArea = ({
	switchState,
	pokeTypeData,
	pokeData,
	fetchPokeData,
	fetchPokeSpecies
}: Props): JSX.Element | null => {
	const classes = useStyles();

	// React Router Hooksの定義
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const pokemon = query.get("pokemon");

		if (pokemon) {
			fetchPokeData(Number(pokemon));
			fetchPokeSpecies(Number(pokemon));
		}
	}, []);

	const showPokeData = (
		event: ReactMouseEvent<HTMLInputElement, MouseEvent>
	): void => {
		// eventTargetの型解決
		const { value } = event.target as HTMLInputElement;
		fetchPokeData(Number(value));
		fetchPokeSpecies(Number(value));

		// paramsを付ける
		H.replace(
			`/type?switch=${switchState}&type1=${pokeTypeData.type1.type}&type2=${
				pokeTypeData.type2.type
			}&pokemon=${Number(value)}`
		);
	};

	// AND検索用リストを作成
	const andPokeList = useMemo(() => createAndPokeArray(pokeTypeData), [
		pokeTypeData
	]);

	// OR検索用リストを作成
	const orPokeList = useMemo(() => createOrPokeArray(pokeTypeData), [
		pokeTypeData
	]);

	return orPokeList.length !== 0 ? (
		<Container className={classes.pokeList}>
			{(switchState ? orPokeList : andPokeList).map((item) => {
				return (
					<PokeIconList
						key={item.no}
						item={item}
						pokeId={pokeData.id}
						onClick={showPokeData}
					/>
				);
			})}
		</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	switchState: state.searchType.switchState.switchState,
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		fetchPokeData: async (no: number): Promise<void> => {
			await searchType.getPokeDataDispatcher(dispatch)(no);
		},
		fetchPokeSpecies: async (no: number): Promise<void> => {
			await searchType.getPokeSpeciesDispatcher(dispatch)(no);
		}
	};
};

export const IconListAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(IconListArea);
