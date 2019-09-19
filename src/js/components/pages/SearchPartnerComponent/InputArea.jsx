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
        <InputAreaDesc>※フルネーム推奨ですが、何入力してもいいです</InputAreaDesc>
        <InputAreaText 
          id="inputName"
          type="text"
          placeholder="名前を入力しよう"
        />
        <button onClick={e => props.decidePartner(e)}>決定</button>
    </InputAreaWrap>

  )
}


export default InputArea;