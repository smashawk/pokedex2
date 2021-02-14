import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchType/InputArea";
import { OutputAreaComp } from "@components/organisms/searchType/OutputArea";
import { IconListAreaComp } from "@components/organisms/searchType/IconListArea";

export const SearchTypeComp = (): JSX.Element => {
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
