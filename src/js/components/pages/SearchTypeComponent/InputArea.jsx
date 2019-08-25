import React from "react";
import styled from 'styled-components';


const InputAreaWrap = styled.div`
  margin: 0;
  width: 220px;
`;

const InputAreaResetType = styled.button`
  margin-top: 20px;
`;


const InputArea = (props) => {

  return(
    <InputAreaWrap>
      <h2>2. タイプ検索</h2>
      <select id="typeSelector1" onChange={e => props.decideType(e)}>
        <option>-</option>
        <option>ノーマル</option>
        <option>ほのお</option>
        <option>みず</option>
        <option>でんき</option>
        <option>くさ</option>
        <option>こおり</option>
        <option>かくとう</option>
        <option>どく</option>
        <option>じめん</option>
        <option>ひこう</option>
        <option>エスパー</option>
        <option>むし</option>
        <option>いわ</option>
        <option>ゴースト</option>
        <option>ドラゴン</option>
        <option>あく</option>
        <option>はがね</option>
        <option>フェアリー</option>
      </select>
      <select id="typeSelector2" onChange={e => props.decideType(e)}>
        <option>-</option>
        <option>ノーマル</option>
        <option>ほのお</option>
        <option>みず</option>
        <option>でんき</option>
        <option>くさ</option>
        <option>こおり</option>
        <option>かくとう</option>
        <option>どく</option>
        <option>じめん</option>
        <option>ひこう</option>
        <option>エスパー</option>
        <option>むし</option>
        <option>いわ</option>
        <option>ゴースト</option>
        <option>ドラゴン</option>
        <option>あく</option>
        <option>はがね</option>
        <option>フェアリー</option>
      </select>
      <InputAreaResetType onClick={e => props.resetType(e)}>タイプリセット</InputAreaResetType>
    </InputAreaWrap>
  )
}

export default InputArea;