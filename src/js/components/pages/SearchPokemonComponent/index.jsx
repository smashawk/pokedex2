import React from "react";
import styled from 'styled-components';
import * as styles from '../../../../styles/mixin/common';
import InputArea from './InputArea';
import OutputArea from './OutputArea';


const ContentArea = styled(styles.BaseContentArea)`
  display: flex;
  justify-content: center;
`;


const SearchPokemon = (props) => {

  return(
    <ContentArea>

      <InputArea 
        decidePokemon={props.decidePokemon}
        errorMessage={props.errorMessage}
      />

      <OutputArea 
        no={props.no}
      />

    </ContentArea>

  )
}

export default SearchPokemon;