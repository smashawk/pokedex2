import { VFC } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "@store/reducers";
import { SetPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchPartner/OutputArea";

export const EnhancedOutputArea: VFC = () => {
	/** state */
	const partnerInfo = useSelector<AppState, SetPartnerInfoState>(
		(state) => state.searchPartner.partnerInfo,
		shallowEqual
	);
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchPartner.pokeData,
		shallowEqual
	);
	const pokeSpecies = useSelector<AppState, NormalizedPokeSpeciesType>(
		(state) => state.searchPartner.pokeSpecies,
		shallowEqual
	);

	return <OutputArea {...{ partnerInfo, pokeData, pokeSpecies }} />;
};
