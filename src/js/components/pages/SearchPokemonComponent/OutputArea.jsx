import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/mixin/common';
import normalArray from '../../../common/createNormalArray';


const OutputAreaWrap = styled(styles.BaseOutputArea)``;

const OutputAreaList = styled(styles.BaseOutputAreaList)``;

const OutputAreaTitle = styled(styles.BaseOutputAreaTitle)``;

const OutputAreaDesc = styled(styles.BaseOutputAreaDesc)``;

const OutputAreaType = styled(styles.BaseOutputAreaType)``;

const OutputAreaImg = styled(styles.BaseOutputAreaImg)`
  ${props => {
    if(props.no < 10) {
      return`
        background: center / contain no-repeat url(./images/00${props.no}_0.png);
      `
    } else if(9 < props.no && props.no < 100) {
      return`
        background: center / contain no-repeat url(./images/0${props.no}_0.png);
      `
    } else if(props.no < 1000) {
      return`
        background: center / contain no-repeat url(./images/${props.no}_0.png);
      `
    }
  }}
`;


const OutputArea = (props) => {

  return(
    <OutputAreaWrap>
      <OutputAreaList>
        <OutputAreaTitle>図鑑番号</OutputAreaTitle>
        <OutputAreaDesc>{props.no}</OutputAreaDesc>
        <OutputAreaTitle>名前</OutputAreaTitle>
        <OutputAreaDesc>{normalArray[props.no].name}</OutputAreaDesc>
        <OutputAreaTitle>タイプ</OutputAreaTitle>
        <OutputAreaDesc>
          <span>{normalArray[props.no].types[0]}</span>
          <OutputAreaType>{normalArray[props.no].types[1]}</OutputAreaType>
        </OutputAreaDesc>
      </OutputAreaList>
      <OutputAreaImg no={props.no}/>
    </OutputAreaWrap>
  )
}

export default OutputArea;