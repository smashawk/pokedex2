import React from "react";
import styles from '../../../scss/modules/SearchPokemon.module.scss'
import styled from 'styled-components';
import normalArray from '../../common/createNormalArray'


const OutputAreaImg = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  vertical-align: middle;
  ${props => {
    if(props.no < 10) {
      return`
        background: center / contain no-repeat url(./images/00${props.no}_0.png);
      `
    } else if(9 < props.no && props.no < 100) {
      return`
        background: center / contain no-repeat url(./images/0${props.no}_0.png);
      `
    } else if(props.no < 1000) {
      return`
        background: center / contain no-repeat url(./images/${props.no}_0.png);
      `
    }
  }}
`;


const SearchPokemon = (props) => {

  return(
    <section className={styles.contentArea}>
      <div className={styles.inputArea}>
        <h2>1. 名前or図鑑ナンバー検索</h2>
        <p className={styles.inputAreaDesc}>※カタカナ名or数字1〜802まで</p>
        <input 
          id="inputText"
          className={styles.inputAreaText}
          type="text"
          onChange={e => props.decidePokemon(e.target.value)}
          placeholder="図鑑ナンバーを入力"
          />
          {props.errorMessage && <p className={styles.inputAreaErrorText}>適切な数字を入力してください。</p>}
      </div>
      <div className={styles.outputArea}>
        <dl className={styles.outputAreaList}>
          <dt className={styles.outputAreaTitle}>図鑑番号</dt>
          <dd className={styles.outputAreaDesc}>{props.no}</dd>
          <dt className={styles.outputAreaTitle}>名前</dt>
          <dd className={styles.outputAreaDesc}>{normalArray[props.no].name}</dd>
          <dt className={styles.outputAreaTitle}>タイプ</dt>
          <dd className={styles.outputAreaDesc}>
            <span className={styles.outputAreaType}>{normalArray[props.no].types[0]}</span>
            <span className={styles.outputAreaType}>{normalArray[props.no].types[1]}</span>
          </dd>
        </dl>
        <OutputAreaImg no={props.no}/>
      </div>
    </section>

  )
}

export default SearchPokemon;