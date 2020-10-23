import React from "react";
import styled from 'styled-components';
import * as styles from '@styles/baseStyle';
import { decidePoke } from '@js/actions/SearchPoke/decidePoke'


interface InputAreaProps {
  decidePoke: typeof decidePoke
  errorMessage:boolean
}


const InputAreaWrap = styled.div``;

const InputAreaDesc = styled(styles.BaseInputAreaDesc)``;

const InputAreaText = styled(styles.BaseInputAreaText)``;

const InputAreaErrorText = styled(styles.BaseInputAreaErrorText)``;


const InputArea = (props:InputAreaProps) => {

  return(
    <InputAreaWrap>
      <h2>1. 名前or図鑑ナンバー検索</h2>
      <InputAreaDesc>※カタカナ名or数字1〜802まで</InputAreaDesc>
      <InputAreaText 
        id="inputText"
        type="text"
        onChange={e => props.decidePoke(e.target.value)}
        placeholder="図鑑ナンバーを入力"
      />
      {props.errorMessage && <InputAreaErrorText>適切な名前or数字を入力してください。</InputAreaErrorText>}
    </InputAreaWrap>
  )
}

export default InputArea;