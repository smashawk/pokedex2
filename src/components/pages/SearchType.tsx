import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { EnhancedInputArea } from "@containers/organisms/searchType/InputArea";
import { EnhancedOutputArea } from "@containers/organisms/searchType/OutputArea";

/**
 * Search Type's root component
 * @constructor
 */
export const SearchType: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<EnhancedInputArea />
				<EnhancedOutputArea />
			</>
		</PokedexTemplate>
	);
};
