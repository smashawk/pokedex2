import React from "react";
import styled from 'styled-components';


const TypeIconListImg = styled.li`
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

// typeArrayのポケモンDOMを作っておく
const typeList = props => {

  const nodes = props.typeArray.map(value => {

    const node = 
    <TypeIconListImg 
      key={value.key}
      id={value.number.no}
      // onMouseOver={e => props.showData(e.target.id)}
      onClick={e => props.showData(e.target.id)}
    />;
  
    return node;
  });

  return nodes;

}
 

export default typeList;