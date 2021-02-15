import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchName/InputArea";
import { OutputAreaComp } from "@components/organisms/searchName/OutputArea";

/**
 * Search Name's root component
 * @constructor
 */
export const SearchNameComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<InputAreaComp />
				<OutputAreaComp />
			</>
		</PokedexTemplate>
	);
};
