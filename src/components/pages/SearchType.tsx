import React from "react";
import { InputAreaComp } from "@components/organisms/searchType/InputArea";
import { OutputAreaComp } from "@components/organisms/searchType/OutputArea";
import { IconListAreaComp } from "@components/organisms/searchType/IconListArea";
import Container from "@material-ui/core/Container";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";

export const SearchTypeComp = (): JSX.Element => {
	return (
		<PokedexTemplate>
			<Container>
				<InputAreaComp />
				<OutputAreaComp />
				<IconListAreaComp />
			</Container>
		</PokedexTemplate>
	);
};
