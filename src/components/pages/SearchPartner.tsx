import React from "react";
import Container from "@material-ui/core/Container";
import { InputAreaComp } from "@components/organisms/searchPartner/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPartner/OutputArea";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";

export const SearchPartnerComp = (): JSX.Element => {
	return (
		<PokedexTemplate>
			<Container>
				<InputAreaComp />
				<OutputAreaComp />
			</Container>
		</PokedexTemplate>
	);
};
