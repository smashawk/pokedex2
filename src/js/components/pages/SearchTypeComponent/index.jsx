import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/mixin/common';
import normalArray from '../../../common/createNormalArray'
import TypeList from './typeList'

const ContentArea = styled(styles.BaseContentArea)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputArea = styled.div`
  margin: 0;
  width: 220px;
`;

const InputAreaResetType = styled.button`
  margin-top: 20px;
`;

const OutputArea = styled(styles.BaseOutputArea)``;

const OutputAreaList = styled(styles.BaseOutputAreaList)``;

const OutputAreaTitle = styled(styles.BaseOutputAreaTitle)``;

const OutputAreaDesc = styled(styles.BaseOutputAreaDesc)``;

const OutputAreaType = styled(styles.BaseOutputAreaType)``;

const OutputAreaImg = styled(styles.BaseOutputAreaImg)`
  ${props => {
    if(props.id < 10) {
      return`
        background: center / contain no-repeat url(./images/00${props.id}_0.png);
      `
    } else if(9 < props.id && props.id < 100) {
      return`
        background: center / contain no-repeat url(./images/0${props.id}_0.png);
      `
    } else if(props.id < 1000) {
      return`
        background: center / contain no-repeat url(./images/${props.id}_0.png);
      `
    }
  }}
`;

const TypeIconList = styled.ul`
  width: 1120px;
  margin-top: 30px;
`;


const SearchType = (props) => {

  return(
    
    <ContentArea>
      <InputArea>
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
    </InputArea>

    <OutputArea>
      <OutputAreaList>
          <OutputAreaTitle>図鑑番号</OutputAreaTitle>
          <OutputAreaDesc>{props.id}</OutputAreaDesc>
          <OutputAreaTitle>名前</OutputAreaTitle>
          <OutputAreaDesc>{normalArray[props.id].name}</OutputAreaDesc>
          <OutputAreaTitle>タイプ</OutputAreaTitle>
          <OutputAreaDesc>
            <span>{normalArray[props.id].types[0]}</span>
            <OutputAreaType>{normalArray[props.id].types[1]}</OutputAreaType>
          </OutputAreaDesc>
      </OutputAreaList>
      <OutputAreaImg id={props.id} />
    </OutputArea>
     
     <div>
       {/* {props.clickMessage && <p>ポケモンをクリック！</p>} */}
       <TypeIconList>
         <TypeList
          typeArray={props.typeArray}
          showData={props.showData}
         />
       </TypeIconList>
     </div>
    </ContentArea>

  )
}

export default SearchType;