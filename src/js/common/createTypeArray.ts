import normalArray from './createNormalArray'


// タイプ検索で選ばれたタイプを持つポケモンデータが入った配列をつくる
const createTypeArray = () => {

  const typeSelector1:HTMLSelectElement = document.getElementById('typeSelector1') as HTMLSelectElement;
  const typeSelector2:HTMLSelectElement = document.getElementById('typeSelector2') as HTMLSelectElement;
  const typeSelector1Value:string = typeSelector1.value;
  const typeSelector2Value:string = typeSelector2.value;
  let typeArray = [];
  let subTypeArray = [];


  // 単タイプもしくは指定なしの場合
  if( !(typeSelector1Value !== '-' && typeSelector2Value !== '-')) {


    // 選ばれたタイプを持つポケモンの配列を作成
    const originTypeArray = normalArray.filter(value => value.types[0] === typeSelector1Value || value.types[0] === typeSelector2Value || value.types[1] === typeSelector1Value || value.types[1] === typeSelector2Value);

    // タイプ配列にkey値を追加
    typeArray = originTypeArray.map((value, index) => ({
      key: index,
      number: value
    }))


  } else {
  // 複数タイプの場合

    
    // セレクタ1で選ばれたタイプを持つポケモンの配列を作成
    subTypeArray = normalArray.filter(value => value.types[0] === typeSelector1Value || value.types[1] === typeSelector1Value);

    // セレクタ2で選ばれたタイプを持つポケモンの配列を作成
    const originTypeArray = subTypeArray.filter(value => value.types[0] === typeSelector2Value || value.types[1] === typeSelector2Value);
    
    // タイプ配列にkey値を追加
    typeArray = originTypeArray.map((value, index) => ({
      key: index,
      number: value
    }))


  }

  return typeArray;
  
}

export default createTypeArray;