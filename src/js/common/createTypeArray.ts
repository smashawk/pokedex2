import normalArray from './createNormalArray'


// タイプ検索で選ばれたタイプを持つポケモンデータが入った配列をつくる
const createTypeArray = (pokeType1:string, pokeType2:string) => {

  let typeArray = [];
  let subTypeArray = [];


  // 単タイプもしくは指定なしの場合
  if( !(pokeType1 !== '-' && pokeType2 !== '-')) {


    // 選ばれたタイプを持つポケモンの配列を作成
    const originTypeArray = normalArray.filter(value => value.types[0] === pokeType1 || value.types[0] === pokeType2 || value.types[1] === pokeType1 || value.types[1] === pokeType2);

    // タイプ配列にkey値を追加
    typeArray = originTypeArray.map((value, index) => ({
      key: index,
      number: value
    }))


  } else {
  // 複数タイプの場合

    
    // セレクタ1で選ばれたタイプを持つポケモンの配列を作成
    subTypeArray = normalArray.filter(value => value.types[0] === pokeType1 || value.types[1] === pokeType1);

    // セレクタ2で選ばれたタイプを持つポケモンの配列を作成
    const originTypeArray = subTypeArray.filter(value => value.types[0] === pokeType2 || value.types[1] === pokeType2);
    
    // タイプ配列にkey値を追加
    typeArray = originTypeArray.map((value, index) => ({
      key: index,
      number: value
    }))


  }

  return typeArray;
  
}

export default createTypeArray;