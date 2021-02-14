import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchPartner/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPartner/OutputArea";

export const SearchPartnerComp = (): JSX.Element => {
	return (
		<PokedexTemplate>
			<>
				<InputAreaComp />
				<OutputAreaComp />
			</>
		</PokedexTemplate>
	);
};
