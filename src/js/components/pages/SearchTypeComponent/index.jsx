import React from "react";
import normalArray from '../../../common/createNormalArray'
import TypeList from './typeList'

const SearchType = (props) => {

  return(
    
    <section className="contentArea contentArea--searchType">
      <div className="inputArea">
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
      <button onClick={e => props.resetType(e)} className="resetType">タイプリセット</button>
    </div>

    <div className="outputArea">
      <dl className="outputArea__list">
        <dt className="outputArea__title">図鑑番号</dt>
        <dd className="outputArea__desc">{normalArray[props.id].no}</dd>
        <dt className="outputArea__title">名前</dt>
        <dd className="outputArea__desc">{normalArray[props.id].name}</dd>
        <dt className="outputArea__title">タイプ</dt>
        <dd className="outputArea__desc">
          <span className="outputArea__type">{normalArray[props.id].types[0]}</span>
          <span className="outputArea__type">{normalArray[props.id].types[1]}</span>
        </dd>
      </dl>
      <div className={`outputArea__img outputArea__img--imgNo${props.id}`}></div>
    </div>
     
     <div>
       {props.clickMessage && <p>ポケモンをクリック！</p>}
       <ul className="typeIconList">
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