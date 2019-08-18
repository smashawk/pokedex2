import React from "react";
import styles from '../../../scss/modules/SearchPartner.module.scss'
// import axios from 'axios';
import normalArray from '../../common/createNormalArray'



const SearchPartner = (props) => {


    return(
      
      <section className={styles.contentArea}>
        <div className={styles.inputArea}>
        <h2>3. あなたの相棒ポケモン検索</h2>
          <p className={styles.inputAreaDesc}>※ひらがな入力必須/フルネーム推奨</p>
          <input
            id="inputName"
            className={styles.inputAreaName}
            type="text"
            placeholder="ひらがなで名前を入力しよう"
            />
          <button onClick={e => props.decidePartner(e)}>決定</button>
        </div>
        {props.isDecision && 
          <div className={styles.outputArea}>
            <div>
              <p className={styles.partnerText}><span className={styles.partnerSubText}>{props.inputName}</span>は<span className={styles.partnerSubText}>{normalArray[props.partnerNo].name}</span>にきめた！</p>
              <div>
                <dl className={styles.outputAreaList}>
                  <dt className={styles.outputAreaTitle}>図鑑番号</dt>
                  <dd className={styles.outputAreaDesc}>{normalArray[props.partnerNo].no}</dd>
                  <dt className={styles.outputAreaTitle}>名前</dt>
                  <dd className={styles.outputAreaDesc}>{normalArray[props.partnerNo].name}</dd>
                  <dt className={styles.outputAreaTitle}>タイプ</dt>
                  <dd className={styles.outputAreaDesc}>
                    <span className={styles.outputAreaType}>{normalArray[props.partnerNo].types[0]}</span>
                    <span className={styles.outputAreaType}>{normalArray[props.partnerNo].types[1]}</span>
                  </dd>
                </dl>
                <div className={`${styles.outputAreaImg} outputAreaImgNo${props.partnerNo}`}></div>
              </div>
            </div>
          </div>
        }

      </section>

    )

}

export default SearchPartner;