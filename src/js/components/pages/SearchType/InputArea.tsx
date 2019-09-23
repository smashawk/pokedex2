import React from "react"
import styled from 'styled-components'
import typeData from '../../../../data/type_data.json'
import { decidePokeType1, decidePokeType2, resetType } from '../../../actions/SearchType/decidePokeType'


interface InputAreaProps {
  decidePokeType1: typeof decidePokeType1
  decidePokeType2: typeof decidePokeType2
  resetType: typeof resetType
}


const InputAreaWrap = styled.div`
  margin: 0;
  width: 220px;
`;

const InputAreaResetType = styled.button`
  margin-top: 20px;
`;


const InputArea = (props:InputAreaProps) => {

  const options = typeData.map((v, i) => {
    return <option value={v} key={i}>{v}</option>
  })

  return(
    <InputAreaWrap>
      <h2>2. タイプ検索</h2>
      <select id="typeSelector1" onChange={e => props.decidePokeType1(e.target.value)}>
        <option value='-'>-</option>
        {options}
      </select>
      <select id="typeSelector2" onChange={e => props.decidePokeType2(e.target.value)}>
        <option value='-'>-</option>
        {options}
      </select>
      <InputAreaResetType onClick={() => props.resetType()}>タイプリセット</InputAreaResetType>
    </InputAreaWrap>
  )
}

export default InputArea;