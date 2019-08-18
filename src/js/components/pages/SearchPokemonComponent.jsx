import React from "react";
import styles from '../../../scss/modules/SearchPokemon.module.scss'
import normalArray from '../../common/createNormalArray'

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
        <div className={`${styles.outputAreaImg} outputAreaImgNo${props.no}`}></div>
      </div>
    </section>

  )
}

export default SearchPokemon;