import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import { AppState } from "@store/index";
import { InputAreaComp } from "../organisms/SearchPartner/InputArea";
import OutputArea from "../organisms/SearchPartner/OutputArea";

const ContentArea = styled(styles.BaseContentArea)``;

type StateProps = {
	inputName: string;
	partnerNo: number;
	isDecision: boolean;
};

type Props = StateProps;

const SearchPartnerComponent = (props: Props): JSX.Element => {
	return (
		<ContentArea>
			<InputAreaComp />

			{props.isDecision && (
				<OutputArea inputName={props.inputName} partnerNo={props.partnerNo} />
			)}
		</ContentArea>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	inputName: state.partner.inputName,
	partnerNo: state.partner.partnerNo,
	isDecision: state.partner.isDecision
});

export const SearchPartner = connect(mapStateToProps)(SearchPartnerComponent);
