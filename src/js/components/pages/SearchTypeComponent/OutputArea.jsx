import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import normalArray from '../../../common/createNormalArray'


const OutputAreaWrap = styled(styles.BaseOutputAreaWrap)``;

const OutputAreaList = styled(styles.BaseOutputAreaList)``;

const OutputAreaTitle = styled(styles.BaseOutputAreaTitle)``;

const OutputAreaDesc = styled(styles.BaseOutputAreaDesc)``;

const OutputAreaType = styled(styles.BaseOutputAreaType)``;

const OutputAreaImg = styled(styles.BaseOutputAreaImg)`
  ${props => {
    if(props.id < 10) {
      return`
        background: center / contain no-repeat url(./images/00${props.id}_0.png);
      `
    } else if(9 < props.id && props.id < 100) {
      return`
        background: center / contain no-repeat url(./images/0${props.id}_0.png);
      `
    } else if(props.id < 1000) {
      return`
        background: center / contain no-repeat url(./images/${props.id}_0.png);
      `
    }
  }}
`;


const OutputArea = (props) => {

  return (

    <OutputAreaWrap>
      <OutputAreaList>
        <OutputAreaTitle>図鑑番号</OutputAreaTitle>
        <OutputAreaDesc>{props.id}</OutputAreaDesc>
        <OutputAreaTitle>名前</OutputAreaTitle>
        <OutputAreaDesc>{normalArray[props.id].name}</OutputAreaDesc>
        <OutputAreaTitle>タイプ</OutputAreaTitle>
        <OutputAreaDesc>
          <span>{normalArray[props.id].types[0]}</span>
          <OutputAreaType>{normalArray[props.id].types[1]}</OutputAreaType>
        </OutputAreaDesc>
      </OutputAreaList>
      <OutputAreaImg id={props.id} />
    </OutputAreaWrap>

  )
}

export default OutputArea;