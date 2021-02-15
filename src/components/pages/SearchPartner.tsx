import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchPartner/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPartner/OutputArea";

/**
 * Search Partner's root component
 * @constructor
 */
export const SearchPartnerComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<InputAreaComp />
				<OutputAreaComp />
			</>
		</PokedexTemplate>
	);
};
