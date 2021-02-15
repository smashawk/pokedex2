import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchType/InputArea";
import { OutputAreaComp } from "@components/organisms/searchType/OutputArea";
import { IconListAreaComp } from "@components/organisms/searchType/IconListArea";

/**
 * Search Type's root component
 * @constructor
 */
export const SearchTypeComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<InputAreaComp />
				<OutputAreaComp />
				<IconListAreaComp />
			</>
		</PokedexTemplate>
	);
};
