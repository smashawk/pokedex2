import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { EnhancedInputArea } from "@containers/organisms/searchPartner/InputArea";
import { EnhancedOutputArea } from "@containers/organisms/searchPartner/OutputArea";

/**
 * Search Partner's root component
 * @constructor
 */
export const SearchPartner: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<EnhancedInputArea />
				<EnhancedOutputArea />
			</>
		</PokedexTemplate>
	);
};
