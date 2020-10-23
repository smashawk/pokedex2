import React from "react";
import styled from 'styled-components';
import * as styles from '@styles/baseStyle';
import { fetchData } from '@js/actions/SearchPartner/decidePartner';


interface InputAreaProps {
  decidePartner: typeof fetchData
  nijiData:any
}


const InputAreaWrap = styled.div``;

const InputAreaDesc = styled(styles.BaseInputAreaDesc)``;

const InputAreaText = styled(styles.BaseInputAreaText)`
  width: 230px
`;


const InputArea = (props :InputAreaProps) => {

  let inputName :any;

  return(

    <InputAreaWrap>
      <h2>3. あなたの相棒ポケ○ン検索</h2>
      <InputAreaDesc>※フルネーム推奨ですが、何入力してもいいです</InputAreaDesc>
      <InputAreaText 
        id="inputName"
        type="text"
        placeholder="名前を入力しよう"
        ref={node => inputName = node}
      />
      <button onClick={() => props.decidePartner(inputName.value)}>決定</button>
    </InputAreaWrap>

  )
};


export default InputArea;