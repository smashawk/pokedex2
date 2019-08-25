import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';


const InputAreaWrap = styled.div``;

const InputAreaDesc = styled(styles.BaseInputAreaDesc)``;

const InputAreaText = styled(styles.BaseInputAreaText)`
  width: 230px
`;


const InputArea = (props) => {
  
  return(

    <InputAreaWrap>
      <h2>3. あなたの相棒ポケモン検索</h2>
        <InputAreaDesc>※ひらがな入力必須/フルネーム推奨</InputAreaDesc>
        <InputAreaText 
          id="inputName"
          type="text"
          placeholder="ひらがなで名前を入力しよう"
        />
        <button onClick={e => props.decidePartner(e)}>決定</button>      
    </InputAreaWrap>

  )
}


export default InputArea;