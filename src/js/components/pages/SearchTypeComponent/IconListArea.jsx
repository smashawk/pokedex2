import React from "react";
import styled from 'styled-components';


const IconListAreaWrap = styled.div``;

const IconListText = styled.p`
  margin-top: 30px;
`;

const IconList = styled.ul`
  width: 1120px;
`;

const IconListImg = styled.li`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  vertical-align: middle;
  cursor: pointer;
  ${props => {

    if(props.id < 10) {
      return`
        background: center / 40px 40px no-repeat url(./images/00${props.id}_4.png);
      `
    } else if(9 < props.id && props.id < 100) {
      return`
        background: center / 40px 40px no-repeat url(./images/0${props.id}_4.png);
      `
    } else if(props.id < 1000) {
      return`
        background: center / 40px 40px no-repeat url(./images/${props.id}_4.png);
      `
    }
  }}
  &:hover {
    background-size: contain;
  }
`;


const IconListArea = props => {
  
  // typeArrayのポケモンDOMを作っておく
  const nodes = props.typeArray.map(value => {

    const node = 
    <IconListImg 
      key={value.key}
      id={value.number.no}
      onMouseOver={e => props.showData(e.target.id)}
      onClick={e => props.showShinyPokemon(e.target.id)}
    />;
  
    return node;
  });

  return (
    <IconListAreaWrap>
      {props.clickMessage && <IconListText>ポケモ○をクリックしてみよう！</IconListText>}
      <IconList>
        {nodes}
      </IconList>
    </IconListAreaWrap>
  )

}
 

export default IconListArea;