import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
import Login from './Login';
import { fetchData } from '../../../actions/SearchPartner/decidePartner'
import { login } from '../../../actions/SearchPartner/login'
import { userInfo } from '../../../types/commonTypes'


interface SearchPartner {
  decidePartner: typeof fetchData
  login: typeof login
  inputName:string
  nijiData:userInfo
  partnerNo:number
  isDecision:boolean
  isLogin:boolean
}


const ContentArea = styled(styles.BaseContentArea)``;


const SearchPartner = (props:SearchPartner) => {

  return(
    
    <ContentArea>
      
      {/* NIJIBOX_社員APIを使用しない場合はLoginコンポーネントをコメントアウト */}
      {/* <Login
        login={props.login}
        isLogin={props.isLogin}
      /> */}

      <InputArea
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