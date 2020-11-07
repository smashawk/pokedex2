import React from "react";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import normalArray from "@js/common/createNormalArray";

const OutputAreaWrap = styled(styles.BaseOutputAreaWrap)``;

const OutputAreaList = styled(styles.BaseOutputAreaList)``;

const OutputAreaTitle = styled(styles.BaseOutputAreaTitle)``;

const OutputAreaDesc = styled(styles.BaseOutputAreaDesc)``;

const OutputAreaType = styled(styles.BaseOutputAreaType)``;

type StateProps = {
	pokeId: number;
	shinyId: number;
};

type Props = StateProps;

const OutputAreaImg = styled(styles.BaseOutputAreaImg)`
	${(props: Props) => {
		if (props.shinyId < 10 && props.shinyId === props.pokeId) {
			return `
        background: center / contain no-repeat url(./images/00${props.shinyId}_2.png);
      `;
		}
		if (
			props.shinyId > 9 &&
			props.shinyId < 100 &&
			props.shinyId === props.pokeId
		) {
			return `
        background: center / contain no-repeat url(./images/0${props.shinyId}_2.png);
      `;
		}
		if (props.shinyId < 1000 && props.shinyId === props.pokeId) {
			return `
        background: center / contain no-repeat url(./images/${props.shinyId}_2.png);
      `;
		}

		if (props.pokeId < 10) {
			return `
        background: center / contain no-repeat url(./images/00${props.pokeId}_0.png);
      `;
		}
		if (props.pokeId > 9 && props.pokeId < 100) {
			return `
        background: center / contain no-repeat url(./images/0${props.pokeId}_0.png);
      `;
		}
		if (props.pokeId < 1000) {
			return `
        background: center / contain no-repeat url(./images/${props.pokeId}_0.png);
      `;
		}
	}}
`;

const OutputArea = (props: Props): JSX.Element => {
	return (
		<OutputAreaWrap>
			<OutputAreaList>
				<OutputAreaTitle>図鑑番号</OutputAreaTitle>
				<OutputAreaDesc>{props.pokeId}</OutputAreaDesc>
				<OutputAreaTitle>名前</OutputAreaTitle>
				<OutputAreaDesc>{normalArray[props.pokeId].name}</OutputAreaDesc>
				<OutputAreaTitle>タイプ</OutputAreaTitle>
				<OutputAreaDesc>
					<span>{normalArray[props.pokeId].types[0]}</span>
					<OutputAreaType>{normalArray[props.pokeId].types[1]}</OutputAreaType>
				</OutputAreaDesc>
			</OutputAreaList>
			<OutputAreaImg pokeId={props.pokeId} shinyId={props.shinyId} />
		</OutputAreaWrap>
	);
};

export default OutputArea;
