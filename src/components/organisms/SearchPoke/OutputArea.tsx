import React from "react";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import normalArray from "@store/utils/createNormalArray";
import { AppState } from "@store/index";
import { connect } from "react-redux";

interface OutputAreaProps {
	no: number;
}

const OutputAreaWrap = styled(styles.BaseOutputAreaWrap)``;

const OutputAreaList = styled(styles.BaseOutputAreaList)``;

const OutputAreaTitle = styled(styles.BaseOutputAreaTitle)``;

const OutputAreaDesc = styled(styles.BaseOutputAreaDesc)``;

const OutputAreaType = styled(styles.BaseOutputAreaType)``;

const OutputAreaImg = styled(styles.BaseOutputAreaImg)`
	${(props: OutputAreaProps) => {
		if (props.no < 10) {
			return `
        background: center / contain no-repeat url(./images/00${props.no}_0.png);
      `;
		}
		if (props.no > 9 && props.no < 100) {
			return `
        background: center / contain no-repeat url(./images/0${props.no}_0.png);
      `;
		}
		if (props.no < 1000) {
			return `
        background: center / contain no-repeat url(./images/${props.no}_0.png);
      `;
		}
	}}
`;

type StateProps = {
	no: number;
};

type Props = StateProps;

const OutputArea = ({ no }: Props): JSX.Element => {
	return (
		<OutputAreaWrap>
			<OutputAreaList>
				<OutputAreaTitle>図鑑番号</OutputAreaTitle>
				<OutputAreaDesc>{no}</OutputAreaDesc>
				<OutputAreaTitle>名前</OutputAreaTitle>
				<OutputAreaDesc>{normalArray[no].name}</OutputAreaDesc>
				<OutputAreaTitle>タイプ</OutputAreaTitle>
				<OutputAreaDesc>
					<span>{normalArray[no].types[0]}</span>
					<OutputAreaType>{normalArray[no].types[1]}</OutputAreaType>
				</OutputAreaDesc>
			</OutputAreaList>
			<OutputAreaImg no={no} />
		</OutputAreaWrap>
	);
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	no: state.number.no
});

export const OutputAreaComp = connect(mapStateToProps)(OutputArea);
