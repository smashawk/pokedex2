import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
import Login from './Login';


const ContentArea = styled(styles.BaseContentArea)``;


const SearchPartner = (props) => {

  return(
    
    <ContentArea>
      
      <Login
        login={props.login}
        isLogin={props.isLogin}
      />

      <InputArea
        fetchData={props.fetchData}
        decidePartner={props.decidePartner}
        nijiData={props.nijiData}
      />

      {props.isDecision && 
        <OutputArea
          inputName={props.inputName}
          nijiData={props.nijiData}
          partnerNo={props.partnerNo}
        />
      }

    </ContentArea>

  )

}


export default SearchPartner;