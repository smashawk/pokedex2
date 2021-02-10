import React from "react";
import Container from "@material-ui/core/Container";
import { InputAreaComp } from "@components/organisms/searchPoke/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPoke/OutputArea";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";

export const SearchPokeComp = (): JSX.Element => {
	return (
		<PokedexTemplate>
			<Container>
				<InputAreaComp />
				<OutputAreaComp />
			</Container>
		</PokedexTemplate>
	);
};
