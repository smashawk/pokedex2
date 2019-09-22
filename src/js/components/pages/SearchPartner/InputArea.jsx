import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';


const InputAreaWrap = styled.div``;

const InputAreaDesc = styled(styles.BaseInputAreaDesc)``;

const InputAreaText = styled(styles.BaseInputAreaText)`
  width: 230px
`;


const InputArea = (props) => {

  let inputName;

  return(

    <InputAreaWrap>
      <h2>3. あなたの相棒ポケ○ン検索</h2>
        <InputAreaDesc>※フルネーム推奨ですが、何入力してもいいです</InputAreaDesc>
        <form onSubmit={() => props.decidePartner(inputName.value)}>
          <InputAreaText 
            id="inputName"
            type="text"
            placeholder="名前を入力しよう"
            ref={node => inputName = node}
          />
          <button type="submit">決定</button>
        </form>
    </InputAreaWrap>

  )
};


export default InputArea;