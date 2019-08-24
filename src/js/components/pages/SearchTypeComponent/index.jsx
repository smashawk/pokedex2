import React from "react";
import styles from '../../../../scss/modules/SearchType.module.scss'
import normalArray from '../../../common/createNormalArray'
import TypeList from './typeList'

const SearchType = (props) => {
  
  return(
    
    <section className={styles.contentArea}>
      <div className={styles.inputArea}>
        <h2>2. タイプ検索</h2>
        <select id="typeSelector1" onChange={e => props.decideType(e)}>
          <option>-</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>
        <select id="typeSelector2" onChange={e => props.decideType(e)}>
          <option>-</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>
      <button onClick={e => props.resetType(e)} className={styles.inputAreaResetType}>タイプリセット</button>
    </div>

    <div className={styles.outputArea}>
        <dl className={styles.outputAreaList}>
          <dt className={styles.outputAreaTitle}>図鑑番号</dt>
          <dd className={styles.outputAreaDesc}>{props.id}</dd>
          <dt className={styles.outputAreaTitle}>名前</dt>
          <dd className={styles.outputAreaDesc}>{normalArray[props.id].name}</dd>
          <dt className={styles.outputAreaTitle}>タイプ</dt>
          <dd className={styles.outputAreaDesc}>
            <span className={styles.outputAreaType}>{normalArray[props.id].types[0]}</span>
            <span className={styles.outputAreaType}>{normalArray[props.id].types[1]}</span>
          </dd>
        </dl>
        <div className={`${styles.outputAreaImg} outputAreaImgNo${props.id}`}></div>
      </div>
     
     <div>
       {/* {props.clickMessage && <p>ポケモンをクリック！</p>} */}
       <ul className={styles.typeIconList}>
         <TypeList
          typeArray={props.typeArray}
          showData={props.showData}
         />
       </ul>
     </div>
   </section>

  )
}

export default SearchType;