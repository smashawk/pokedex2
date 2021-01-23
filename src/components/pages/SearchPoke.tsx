import React from "react";
import Container from "@material-ui/core/Container";
import { InputAreaComp } from "@components/organisms/searchPoke/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPoke/OutputArea";

export const SearchPokeComp = (): JSX.Element => {
	return (
		<Container>
			<InputAreaComp />
			<OutputAreaComp />
		</Container>
	);
};
