import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import InputArea from './InputArea'
import OutputArea from './OutputArea'
import IconListArea from './IconListArea'


const ContentArea = styled(styles.BaseContentArea)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


const SearchType = (props) => {

  return(
    
    <ContentArea>

      <InputArea 
        decideType1={props.decideType1}
        decideType2={props.decideType2}
        resetType={props.resetType}
      />

      <OutputArea 
        id={props.id}
        shinyId={props.shinyId}
      />
     
      <IconListArea
        pokeType1={props.pokeType1}
        pokeType2={props.pokeType2}
        showData={props.showData}
        showShinyPokemon={props.showShinyPokemon}
        clickMessage={props.clickMessage}
      />

    </ContentArea>

  )
}


export default SearchType;