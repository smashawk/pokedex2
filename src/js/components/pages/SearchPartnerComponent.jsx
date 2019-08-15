import React from "react";
// import axios from 'axios';
import normalArray from '../../common/createNormalArray'



const SearchPartner = (props) => {


    return(
      
      <section className="contentArea contentArea--searchPartner">
        <div className="inputArea">
        <h2>3. あなたの相棒ポケモン検索</h2>
          <p className="inputArea__desc">※ひらがな入力必須/フルネーム推奨</p>
          <p className="inputArea__desc"></p>
          <input 
            id="inputName"
            className="inputName"
            type="text"
            placeholder="ひらがなで名前を入力しよう"
            />
          <button onClick={e => props.decidePartner(e)}>決定</button>
        </div>
        {props.isDecision && 
          <div className="outputArea">
            <div>
              <p className="partnerText"><span className="partnerSubText">{props.inputName}</span>は<span className="partnerSubText">{normalArray[props.partnerNo].name}</span>にきめた！</p>
              <div>
                <dl className="outputArea__list">
                  <dt className="outputArea__title">図鑑番号</dt>
                  <dd className="outputArea__desc">{normalArray[props.partnerNo].no}</dd>
                  <dt className="outputArea__title">名前</dt>
                  <dd className="outputArea__desc">{normalArray[props.partnerNo].name}</dd>
                  <dt className="outputArea__title">タイプ</dt>
                  <dd className="outputArea__desc">
                    <span className="outputArea__type">{normalArray[props.partnerNo].types[0]}</span>
                    <span className="outputArea__type">{normalArray[props.partnerNo].types[1]}</span>
                  </dd>
                </dl>
                <div className={`outputArea__img outputArea__img--imgNo${props.partnerNo}`}></div>
              </div>
            </div>
          </div>
        }

      </section>

    )

}

export default SearchPartner;