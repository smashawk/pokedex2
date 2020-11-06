import React from "react";
import { connect } from "react-redux";
import { AppState } from "@js/reducers/index";
import { Dispatch } from "redux";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import { decidePoke } from "@js/actions/SearchPoke/decidePoke";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";

type StateProps = {
	no: number;
	errorMessage: boolean;
};

type DispatchProps = {
	decidePoke: typeof decidePoke;
};

type Props = StateProps & DispatchProps;

const ContentArea = styled(styles.BaseContentArea)`
	display: flex;
	justify-content: center;
`;

const SearchPoke = (props: Props): JSX.Element => {
	return (
		<ContentArea>
			<InputArea
				decidePoke={props.decidePoke}
				errorMessage={props.errorMessage}
			/>
			<OutputArea no={props.no} />
		</ContentArea>
	);
};

const mapStateToProps = (state: AppState): StateProps => ({
	no: state.number.no,
	errorMessage: state.number.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	decidePoke: (inputText: number | string) => dispatch(decidePoke(inputText))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPoke);
