import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputArea } from "@components/organisms/searchType/InputArea";
import { OutputArea } from "@components/organisms/searchType/OutputArea";

/**
 * Search Type's root component
 * @constructor
 */
export const SearchTypeComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<InputArea />
				<OutputArea />
			</>
		</PokedexTemplate>
	);
};
