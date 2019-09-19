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
        result={props.result}
      />

      {props.isDecision && 
        <OutputArea
          partnerNo={props.partnerNo}
          inputName={props.inputName}
          result={props.result}
        />
      }

    </ContentArea>

  )

}


export default SearchPartner;