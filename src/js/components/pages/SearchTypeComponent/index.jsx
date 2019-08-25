import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/mixin/common';
import InputArea from './InputArea'
import OutputArea from './OutputArea'
import IconListArea from './IconListArea'


const ContentArea = styled(styles.BaseContentArea)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


const SearchType = (props) => {

  return(
    
    <ContentArea>

      <InputArea 
        decideType={props.decideType}
        resetType={props.resetType}
      />

      <OutputArea 
        id={props.id}
      />
     
      <IconListArea
        typeArray={props.typeArray}
        showData={props.showData}
        clickMessage={props.clickMessage}
      />

    </ContentArea>

  )
}


export default SearchType;