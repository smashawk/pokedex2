import React from "react";
import styles from '../../../../scss/modules/SearchType.module.scss'

// typeArrayのポケモンDOMを作っておく
const typeList = props => {

  const nodes = props.typeArray.map(value => {

    const node = 
    <li 
      key={value.key}
      id={value.number.no}
      className={`${styles.typeIconListImg} typeIconListImgNo${value.number.no}`}
      onMouseOver={e => props.showData(e.target.id)}
      // onClick={e => props.showData(e.target.id)}
    >
    </li>;
  
    return node;
  });

  return nodes;

}
 

export default typeList;