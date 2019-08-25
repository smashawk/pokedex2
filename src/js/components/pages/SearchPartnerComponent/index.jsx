import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
// import axios from 'axios';


const ContentArea = styled(styles.BaseContentArea)``;


const SearchPartner = (props) => {

  return(
    
    <ContentArea>

      <InputArea 
        decidePartner={props.decidePartner}
      />

      {props.isDecision && 
        <OutputArea
          partnerNo={props.partnerNo}
          inputName={props.inputName}
        />
      }

    </ContentArea>

  )

}


export default SearchPartner;