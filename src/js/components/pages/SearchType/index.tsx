import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/baseStyle';
import InputArea from './InputArea'
import OutputArea from './OutputArea'
import IconListArea from './IconListArea'
import { decidePokeType1, decidePokeType2, resetType } from '../../../actions/SearchType/decidePokeType'
import { showData } from '../../../actions/SearchType/showData'
import { showShinyPoke } from '../../../actions/SearchType/showShinyPoke'


interface SearchTypeProps {
  decidePokeType1: typeof decidePokeType1
  decidePokeType2: typeof decidePokeType2
  resetType: typeof resetType
  showData: typeof showData
  showShinyPoke: typeof showShinyPoke
  pokeType1:string
  pokeType2:string
  clickMessage:boolean
  pokeId:number
  shinyId:number
}


const ContentArea = styled(styles.BaseContentArea)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


const SearchType = (props:SearchTypeProps) => {

  return(
    
    <ContentArea>

      <InputArea 
        decidePokeType1={props.decidePokeType1}
        decidePokeType2={props.decidePokeType2}
        resetType={props.resetType}
      />

      <OutputArea 
        pokeId={props.pokeId}
        shinyId={props.shinyId}
      />
     
      <IconListArea
        pokeType1={props.pokeType1}
        pokeType2={props.pokeType2}
        showData={props.showData}
        showShinyPoke={props.showShinyPoke}
        clickMessage={props.clickMessage}
        pokeId={props.pokeId}
      />

    </ContentArea>

  )
}


export default SearchType;