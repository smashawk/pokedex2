import React from "react";

// typeArrayのポケモンDOMを作っておく
const typeList = props => {

  const nodes = props.typeArray.map(value => {

    const node = 
    <li 
      key={value.key}
      id={value.number.no}
      className={`typeIconList__imgIcon typeIconList__imgIcon--imgNo${value.number.no}`}
      onClick={e => props.showData(e.target.id)}
    >
    </li>;
  
    return node;
  });

  return nodes;

}
 

export default typeList;