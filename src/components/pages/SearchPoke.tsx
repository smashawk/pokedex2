import React from "react";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import { InputAreaComp } from "@components/organisms/SearchPoke/InputArea";
import { OutputAreaComp } from "@components/organisms/SearchPoke/OutputArea";

const ContentArea = styled(styles.BaseContentArea)`
	display: flex;
	justify-content: center;
`;

export const SearchPokeComponent = (): JSX.Element => {
	return (
		<ContentArea>
			<InputAreaComp />
			<OutputAreaComp />
		</ContentArea>
	);
};
