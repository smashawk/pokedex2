import React from "react";
import Container from "@material-ui/core/Container";
import { InputAreaComp } from "@components/organisms/searchPartner/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPartner/OutputArea";

export const SearchPartnerComp = (): JSX.Element => {
	return (
		<Container>
			<InputAreaComp />
			<OutputAreaComp />
		</Container>
	);
};
