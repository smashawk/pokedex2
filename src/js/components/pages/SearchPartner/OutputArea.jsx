import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import normalArray from '../../../common/createNormalArray'


const OutputAreaWrap = styled(styles.BaseOutputAreaWrap)`
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
  width: 960px;
`;

const OutputAreaList = styled(styles.BaseOutputAreaList)``;

const OutputAreaTitle = styled(styles.BaseOutputAreaTitle)``;

const OutputAreaDesc = styled(styles.BaseOutputAreaDesc)``;

const OutputAreaType = styled(styles.BaseOutputAreaType)``;

const OutputAreaImg = styled(styles.BaseOutputAreaImg)`
  ${props => {
    if(props.partnerNo < 10) {
      return`
        background: center / contain no-repeat url(./images/00${props.partnerNo}_0.png);
      `
    } else if(9 < props.partnerNo && props.partnerNo < 100) {
      return`
        background: center / contain no-repeat url(./images/0${props.partnerNo}_0.png);
      `
    } else if(props.partnerNo < 1000) {
      return`
        background: center / contain no-repeat url(./images/${props.partnerNo}_0.png);
      `
    }
  }}
`;

const PartnerText = styled.p`
  font-size: 2rem;
`;

const PartnerSubText = styled.span`
  font-weight: bold;
  padding: 0 0.5rem;
`;

const OutputAreaNijiImg = styled.img`
  width: 200px;
  height: 200px;
`;


const OutputArea = (props) => {

  return(

    <OutputAreaWrap>

    {props.result && <OutputAreaNijiImg src={props.result.photo_url} />}

    <div>

      <PartnerText>
        <PartnerSubText>{props.inputNameValue}</PartnerSubText>は
        <PartnerSubText>{normalArray[props.partnerNo].name}</PartnerSubText>にきめた！
      </PartnerText>

      <OutputAreaList>
        <OutputAreaTitle>図鑑番号</OutputAreaTitle>
        <OutputAreaDesc>{normalArray[props.partnerNo].no}</OutputAreaDesc>
        <OutputAreaTitle>名前</OutputAreaTitle>
        <OutputAreaDesc>{normalArray[props.partnerNo].name}</OutputAreaDesc>
        <OutputAreaTitle>タイプ</OutputAreaTitle>
        <OutputAreaDesc>
          <span>{normalArray[props.partnerNo].types[0]}</span>
          <OutputAreaType>{normalArray[props.partnerNo].types[1]}</OutputAreaType>
        </OutputAreaDesc>
      </OutputAreaList>

      <OutputAreaImg partnerNo={props.partnerNo}/>

    </div>


    </OutputAreaWrap>
  )
}


export default OutputArea;