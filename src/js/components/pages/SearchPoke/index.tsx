import React from "react";
import styled from 'styled-components';
import * as styles from '@styles/baseStyle';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
import { decidePoke } from '@js/actions/SearchPoke/decidePoke'


interface SearchPokeProps {
  decidePoke: typeof decidePoke
  no:number
  errorMessage:boolean
}


const ContentArea = styled(styles.BaseContentArea)`
  display: flex;
  justify-content: center;
`;


const SearchPoke = (props:SearchPokeProps) => {

  return(
    <ContentArea>

      <InputArea 
        decidePoke={props.decidePoke}
        errorMessage={props.errorMessage}
      />

      <OutputArea 
        no={props.no}
      />

    </ContentArea>

  )
}

export default SearchPoke;