import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import { InputAreaComp } from "@components/organisms/searchPoke/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPoke/OutputArea";

export const SearchPokeComp = (): JSX.Element => {
	return (
		<PokedexTemplate>
			<>
				<InputAreaComp />
				<OutputAreaComp />
			</>
		</PokedexTemplate>
	);
};
