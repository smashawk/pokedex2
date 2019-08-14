import React from "react";
import normalArray from '../../common/createNormalArray'

const SearchPokemon = (props) => {

  return(
    <section className="contentArea contentArea--searchPokemon">
      <div className="inputArea">
        <h2>1. 図鑑ナンバー検索</h2>
        <p className="inputArea__desc">※1〜802まで</p>
        <input 
          id="inputText"
          className="inputArea__text"
          type="text"
          onChange={e => props.decidePokemon(e.target.value)}
          placeholder="図鑑ナンバーを入力"
          />
          {props.errorMessage && <p className="inputArea__errorText">適切な数字を入力してください。</p>}
      </div>
      <div className="outputArea">
        <dl className="outputArea__list">
          <dt className="outputArea__title">図鑑番号</dt>
          <dd className="outputArea__desc">{props.no}</dd>
          <dt className="outputArea__title">名前</dt>
          <dd className="outputArea__desc">{normalArray[props.no].name}</dd>
          <dt className="outputArea__title">タイプ</dt>
          <dd className="outputArea__desc">
            <span className="outputArea__type">{normalArray[props.no].types[0]}</span>
            <span className="outputArea__type">{normalArray[props.no].types[1]}</span>
          </dd>
        </dl>
        <div className={`outputArea__img outputArea__img--imgNo${props.no}`}></div>
      </div>
    </section>

  )
}

export default SearchPokemon;