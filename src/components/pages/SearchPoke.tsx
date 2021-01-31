import React from "react";
import Container from "@material-ui/core/Container";
import { InputAreaComp } from "@components/organisms/searchPoke/InputArea";
import { OutputAreaComp } from "@components/organisms/searchPoke/OutputArea";
import { RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps<{ no: string }>;

export const SearchPokeComp = (props: Props): JSX.Element => {
	return (
		<Container>
			<InputAreaComp {...props} />
			<OutputAreaComp />
		</Container>
	);
};
