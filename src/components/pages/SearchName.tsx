import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputArea } from "@components/organisms/searchName/InputArea";
import { OutputArea } from "@components/organisms/searchName/OutputArea";

/**
 * Search Name's root component
 * @constructor
 */
export const SearchNameComp: VFC = () => {
	return (
		<PokedexTemplate>
			<>
				<InputArea />
				<OutputArea />
			</>
		</PokedexTemplate>
	);
};
