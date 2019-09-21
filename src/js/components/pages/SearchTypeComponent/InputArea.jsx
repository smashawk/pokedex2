import React from "react"
import styled from 'styled-components'
import typeData from '../../../../data/type_data.json'


const InputAreaWrap = styled.div`
  margin: 0;
  width: 220px;
`;

const InputAreaResetType = styled.button`
  margin-top: 20px;
`;


const InputArea = (props) => {

  const options = typeData.map((v, i) => {
    return <option value={v} key={i}>{v}</option>
  })

  return(
    <InputAreaWrap>
      <h2>2. タイプ検索</h2>
      <select id="typeSelector1" value={props.pokeType1} onChange={e => props.decideType1(e.target.value)}>
        <option value='-'>-</option>
        {options}
      </select>
      <select id="typeSelector2" onChange={e => props.decideType2(e.target.value)}>
        <option value='-'>-</option>
        {options}
      </select>
      <InputAreaResetType onClick={e => props.resetType(e)}>タイプリセット</InputAreaResetType>
    </InputAreaWrap>
  )
}

export default InputArea;