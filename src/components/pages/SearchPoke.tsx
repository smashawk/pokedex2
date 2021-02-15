import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchPoke/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPoke/OutputArea";

/**
 * Search Name's root component
 * @constructor
 */
export const SearchPokeComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<InputAreaComp />
				<OutputAreaComp />
			</>
		</PokedexTemplate>
	);
};
