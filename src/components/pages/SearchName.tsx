import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { EnhancedInputArea } from "@containers/organisms/searchName/InputArea";
import { EnhancedOutputArea } from "@containers/organisms/searchName/OutputArea";

/**
 * Search Name's root component
 * @constructor
 */
export const SearchNameComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<EnhancedInputArea />
				<EnhancedOutputArea />
			</>
		</PokedexTemplate>
	);
};
