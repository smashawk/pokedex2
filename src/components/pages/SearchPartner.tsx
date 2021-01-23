import React from "react";
import Container from "@material-ui/core/Container";
import { InputAreaComp } from "../organisms/SearchPartner/InputArea";
import { OutputAreaComp } from "../organisms/SearchPartner/OutputArea";

export const SearchPartnerComp = (): JSX.Element => {
	return (
		<Container>
			<InputAreaComp />
			<OutputAreaComp />
		</Container>
	);
};
